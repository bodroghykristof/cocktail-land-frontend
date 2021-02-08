import React, {createContext, useEffect, useState} from 'react';
import apiService from './services/Api';
import {forEach} from "react-bootstrap/ElementChildren";

export const AllCocktailsContext = createContext();

export const AllCocktailsProvider = (props) => {

  const [allCocktails, setAllCocktails] = useState([]);

  //TODO make code clean

  useEffect(() => {
    async function fetchCocktails() {
      const token = localStorage.getItem('token');
      const result = await apiService.getAllCocktails(token);
      const cocktailsFromAPI = result.data.cocktails;
      
      const favoritesBySavedNumber = await apiService.getFavoriteCoctailsBySavedNumber(token);
      console.log("fay:", favoritesBySavedNumber.data);
      const sortedAllCocktail = await sortAllCocktails(favoritesBySavedNumber.data, result.data.cocktails)
      const all = bubbleSortConcept1(sortedAllCocktail);
      // console.log("all", cocktailFromAPI)
      setAllCocktails(sortedAllCocktail);
    }
    fetchCocktails();
  }, []);


  function sortAllCocktails(favorites, allCocktails) {
    const res = {};
    
      favorites.forEach( cocktail => res[cocktail.idDrink.toString()] = cocktail.saved_number);
    
    const keys = Object.keys(res);
    console.log("keysss", keys);
    for (let i = 0; i < allCocktails.length; i++) {
      if (Object.keys(res).includes(allCocktails[i].idDrink)) {
        allCocktails[i]['saved_number'] = res[allCocktails[i].idDrink];
      } else {
        allCocktails[i]['saved_number'] = 0;
      }
    }
        return allCocktails;
  }


    function bubbleSortConcept1(arr) {
      for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (arr[i]['saved_number'] < arr[i + 1]['saved_number']) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    }


console.log("allCocktails", allCocktails);

  return (
    <AllCocktailsContext.Provider value={[allCocktails, setAllCocktails]}>
      {props.children}
    </AllCocktailsContext.Provider>
  );
};

//TODO below acceptable solution if we use just React

// useEffect( () => {
//
//   async function fetching () {
//     let cocktail = [];
//     for (let i = 118; i < 122; i++) {
//       let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + String.fromCharCode(i);
//       console.log("url: ", url);
//       await Axios.get(url)
//           .then(res => res.data)
//           .then(res =>res['drinks'].forEach(e => cocktail.push(e)) )
//           .catch(error => console.log(error))
//     }
//     setAllCocktails(cocktail);
//   }
//
//   fetching();
//
// }, [])