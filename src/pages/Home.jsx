import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteList from "../components/NoteList";
import { deleteTodos, getTodos } from "../utils/local";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = (index) => {
    deleteTodos(index);
    setTodos(getTodos());
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const data = getTodos();
    setTodos(data);
  }, []);

  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
            Note Application
          </h2>
        </div>
        <div className="mx-auto pt-10 mb-3 xl:w-96">
          <div className="flex items-center justify-center ">
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
                class="px-10 text-white bg-gray-600 border-1 hover:bg-green-950"
                type="submit"
                onClick={() => {
                  navigate("/add");
                }}
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-5 pt-5 sm:mt-5 sm:pt-5 lg:mx-10 lg:max-w-none lg:grid-cols-3">
          <NoteList todos={filteredTodos} onDelete={onDeleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default Home;
