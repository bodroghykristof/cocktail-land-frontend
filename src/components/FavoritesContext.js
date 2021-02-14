import React, { useState, createContext, useEffect } from "react";
import apiService from "./services/Api";

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const getUsersFavouriteCoctails = async (setFavorites) => {
      const token = localStorage.getItem("token");
      const response = await apiService.getFavoriteCoctails(token);
      setFavorites(response.data);
  }
  
    if (localStorage.getItem("token") !== null) {
      getUsersFavouriteCoctails(setFavorites);
      
    } 

  }, [])

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

