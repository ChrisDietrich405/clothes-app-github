import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

const LogIn = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogInButton = () => {
    localStorage.setItem("loggedIn", email);
    setIsUserLoggedIn(true);
  };

  return (
    <>
      <div>
        <h1>Log In</h1>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleLogInButton}>Log In</button>
    </>
  );
};

export default LogIn;
