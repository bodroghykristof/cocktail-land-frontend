import React, {createContext, useEffect, useState} from 'react';
import apiService from './services/Api';
import {forEach} from "react-bootstrap/ElementChildren";

export const AllCocktailsContext = createContext();

export const AllCocktailsProvider = (props) => {

  const [allCocktails, setAllCocktails] = useState([]);

  useEffect( () => {

    async function fetching () {
      let cocktail = [];
      for (let i = 118; i < 122; i++) {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + String.fromCharCode(i);
        console.log("url: ", url);
        await Axios.get(url)
            .then(res => res.data)
            .then(res =>res['drinks'].forEach(e => cocktail.push(e)) )
            .catch(error => console.log(error))
      }
      setAllCocktails(cocktail);
    }
  
    fetching();
  
  }, [])

console.log("allCocktails", allCocktails);

  return (
    <AllCocktailsContext.Provider value={[allCocktails, setAllCocktails]}>
      {props.children}
    </AllCocktailsContext.Provider>
  );
};
