import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, putAccessToken } from "../utils/network";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    const response = await login({ username, password });
    if (response?.data?.token) {
      putAccessToken(response.data.token);
      navigate(`/${username}`);
    }
  }

  return (
    <body className=" bg-gray-600">
      <div class="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
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
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Pasword"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              ></input>
            </div>

            <div className="mb-4 ">
              {username && password ? (
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Login
                </button>
              ) : (
                <button
                  class="w-full bg-white text-black font-semibold px-4 py-2 rounded-md"
                  type="submit"
                  disabled
                >
                  Login
                </button>
              )}
            </div>

            <div className="text-start mb-4">
              if you don't have account,{" "}
              <Link to="/register" className="hover:text-blue-600">
                <strong>Register</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login;
