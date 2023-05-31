import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const inValid = password === "" || email === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/instagram-login-image.png"
          alt="iphone-with-profile"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="instagram"
              className="my-6 w-6/12"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary"></p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={inValid}
              type="submit"
              className="text-white bg-blue-400 w-full rounded-lg h-8 font-semibold "
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Don't have an account?
            <Link to="/signup" className="font-semibold text-blue-500 ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
