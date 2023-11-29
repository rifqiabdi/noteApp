import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../utils/local";
import "../App.css";
function AddTodo(props) {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: "",
    createdAt: "",
    description: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(todo);
    navigate("/");
  }
  return (
    <body className=" bg-gray-600">
      <div class="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <form
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Title
              </label>
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setTodo({ ...todo, title: value });
                }}
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Title"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="tanggal"
                className="block text-gray-700 font-semibold mb-2"
              >
                Date
              </label>
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setTodo({ ...todo, createdAt: value });
                }}
                type="date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Tanggal"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                onChange={(event) => {
                  const value = event.target.value;
                  setTodo({ ...todo, description: value });
                }}
                className="w-full h-36 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Deskripsi"
                required
              ></textarea>
            </div>
            <div>
              {todo.title && todo.createdAt && todo.description ? (
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              ) : (
                <button
                  class="w-full bg-white text-black font-semibold px-4 py-2 rounded-md"
                  type="submit"
                  disabled
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
export default AddTodo;
