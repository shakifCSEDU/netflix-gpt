import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggoleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/df8e61e4-213e-4edd-a057-6f4bcb4e311d/BD-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSignInForm &&(
        <input
          type="text"
          placeholder="Full Name "
          className="p-4 my-4 w-full bg-gray-700"
        />)
        }
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggoleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered!Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
