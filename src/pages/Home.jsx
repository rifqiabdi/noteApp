import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNotes, deleteAccessToken, deleteNote } from "../utils/network";
import NoteList from "../components/NoteList";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = async (id) => {
    const deleteResult = await deleteNote(id);

    if (!deleteResult.error) {
      // Jika penghapusan berhasil, jalankan getNotes kembali
      const getNotesResult = await getNotes();

      if (!getNotesResult.error) {
        setNotes(getNotesResult.data);
      } else {
        console.error(
          "Error fetching notes after deletion:",
          getNotesResult.code
        );
      }
    } else {
      console.error("Error deleting note:", deleteResult.code);
    }
  };

  function onLogoutHandler(event) {
    event.preventDefault();
    const isConfirmed = window.confirm("Apakah Anda yakin?");
    if (isConfirmed) {
      deleteAccessToken();
      navigate("/");
    }
  }

  useEffect(() => {
    getNotes()
      .then((result) => {
        const data = result.data;
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <body>
      <nav class="bg-white text-black py-3  shadow-md">
        <div class="container mx-auto flex justify-between">
          <div>
            <h5 className="text-1xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
              Note Application
            </h5>
          </div>
          <div className="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80"
              onChange={(event) => {
                handleChangeSearch(event);
              }}
              value={search}
              placeholder="Cari Berdasarkan Title..."
            />
            <button
              className="px-3 py-3 text-white bg-gray-600 hover:bg-green-950 rounded-md"
              type="submit"
              onClick={() => {
                navigate(`/${username}/add`);
              }}
            >
              Add Note
            </button>
          </div>

          <div className="flex border-1 border-gray-200 rounded">
            <button
              className="px-3 py-3 text-white bg-red-500 hover:bg-orange-900 rounded-md"
              type="submit"
              onClick={(event) => {
                onLogoutHandler(event);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="py-10 sm:py-10">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
              Hallo {username} <br /> Selamat Datang di Note Application
            </h2>
          </div>

          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-5 pt-5 sm:mt-5 sm:pt-5 lg:mx-10 lg:max-w-none lg:grid-cols-3">
            <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
