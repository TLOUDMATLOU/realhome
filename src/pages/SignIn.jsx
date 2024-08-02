import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

function SignIn() {
  // Variables

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  // functions
  function handleSignIn(event) {
    event.preventDefault();

    // Check required And Set errors from false to true
    if (username == ""){
      setErrors({
        ...errors,
        "username": true
      })
    }

    if (password == ""){
      setErrors({
        ...errors,
        "password": true
      })
    }

    console.log({
      username: username,
      password: password,
    });
  }

  return (
    <div className="SignIn p-8">
      <form
        action=""
        className="SignIn_form flex flex-col items-center w-full gap-4"
      >
        {/* IMAGE */}
        <img src="/assets/logo.png" alt="logo" className="h-80" />

        {/* Username */}
        <CustomInput
          title="Username"
          placeholder={"Enter username"}
          value={username}
          onChange={setUsername}
          required={true}
          error={errors.username}
        />

        {/* Password */}
        <CustomInput
          title="Password"
          placeholder={"Enter password"}
          value={password}
          onChange={setPassword}
          isPassword
          required
          error={errors.password}
        />

        {/* Submit Button */}
        <button
          onClick={handleSignIn}
          className="bg-black text-white w-80 p-2 mt-4 rounded-lg"
        >
          Sign In
        </button>
        <p className="text-gray-500">Don't have an account? 
          <a href="#" className="text-black font-semibold underline">Sign Up</a>
        </p>

        {/* Already have an account */}
      </form>
    </div>
  );
}

export default SignIn;
