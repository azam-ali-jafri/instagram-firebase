import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";
import { Link, useNavigate } from "react-router-dom";
import { createUser, doesUsernameExists } from "../services/firebase";

const Signup = () => {
  const { firebase } = useContext(FirebaseContext);

  const naviagte = useNavigate();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const inValid =
    password === "" || email === "" || username === "" || fullname === "";

  const handleSignup = async (e) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExists(username);
    if (!usernameExists) {
      try {
        await createUser(username, fullname, email, password);
        naviagte("/", { replace: true });
      } catch (error) {
        setError(error.message);
      }
    } else setError("username already exists");
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen justify-center items-center h-screen">
      <div className="flex flex-col w-1/4">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="instagram"
              className="my-6 w-6/12"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

          <form onSubmit={handleSignup}>
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              value={fullname}
              onChange={({ target }) => setFullname(target.value)}
            />
            <input
              aria-label="Enter your email address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 w-full"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={inValid}
              type="submit"
              className="text-white bg-blue-400 w-full rounded-lg h-8 font-semibold "
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Have an account?
            <Link to="/login" className="font-semibold text-blue-500 ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
