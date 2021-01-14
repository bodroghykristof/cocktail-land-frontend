import React, { useState, createContext } from "react";

export const IsLoggedInContext = createContext();

const isTokenInLS = localStorage.getItem("token") ? true : false;

export const IsLoggedInProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isTokenInLS);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </IsLoggedInContext.Provider>
  );
};
