import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ username, password }).then((response) => {
      console.log(response);
      if (response) {
        console.log(response?.code);
        alert("Anda berhasil membuat akun");
        navigate("/");
      }
    });
  }

  return (
    <body className=" bg-gray-600">
      <div class="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>
          <form
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Username"
                required
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Username"
                required
              ></input>
            </div>

            <div>
              {username && password ? (
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Register
                </button>
              ) : (
                <button
                  class="w-full bg-white text-black font-semibold px-4 py-2 rounded-md"
                  type="submit"
                  disabled
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Register;
