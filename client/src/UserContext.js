import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("loggedIn");
    if (userEmail) {
      setIsUserLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
