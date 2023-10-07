import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utility/validity";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "./../utility/firebase";

import { useDispatch } from "react-redux";
import {addUser} from "../utility/userSlice";
import { USE_AVATAR } from "../utility/constants";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const toggoleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sign up
    if (!isSignInForm) {
      // sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value, photoURL:USE_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL}  = auth.currentUser;
            dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL,
                })
            );

          }).catch((error) => {
            setErrorMessage(error.message);
          });



          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          //
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });

    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggoleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already Registered!Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
