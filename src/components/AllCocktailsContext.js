import React, { useState, createContext, useEffect } from 'react';
import apiService from './services/Api';

export const AllCocktailsContext = createContext();

export const AllCocktailsProvider = (props) => {
  const [allCocktails, setAllCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      const token = localStorage.getItem('token');
      const result = await apiService.getAllCocktails(token);
      setAllCocktails(result.data.cocktails);
    }
    fetchCocktails();
  }, []);

  return (
    <AllCocktailsContext.Provider value={[allCocktails, setAllCocktails]}>
      {props.children}
    </AllCocktailsContext.Provider>
  );
};