import React, { useState, useContext } from 'react';
import ResultContainer from './ResultContainer';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [resultsByName, setResultsByName] = useState([]);
  const [resultsByIngredient, setResultsByIngredient] = useState([]);

  const hasIngredient = (cocktail, searchedIngredient) => {
    for (let i = 1; i <= 15; i++) {
      const key = `strIngredient${i.toString()}`;
      console.log(cocktail[key]);
      if (cocktail[key] === searchedIngredient) {
        return true;
      } else if (cocktail[key] === null) {
        return false;
      }
    }
    return false;
  };

  const searchCocktailsByName = (keyword) => {
    let currentResult = [];
    for (let cocktail of allCocktails) {
      if (
        cocktail.strDrink.toLowerCase().startsWith(keyword.toLowerCase()) &&
        keyword !== ''
      ) {
        currentResult.push(cocktail);
      }
    }
    setResultsByName(currentResult);
  };

  const searchCocktailsByIngredient = (keyword) => {
    let currentResult = [];
    for (let cocktail of allCocktails) {
      if (hasIngredient(cocktail, keyword)) {
        currentResult.push(cocktail);
      }
    }
    setResultsByIngredient(currentResult);
  };

  const searchCocktails = (event) => {
    const keyword = event.target.value;
    searchCocktailsByName(keyword);
    searchCocktailsByIngredient(keyword);
  };

  return (
    <React.Fragment>
      <h1>Search Cocktails</h1>
      <input type='text' onChange={searchCocktails}></input>
      {resultsByName.length > 0 ? (
        <ResultContainer cocktails={resultsByName} />
      ) : (
        ``
      )}
      {resultsByIngredient.length > 0 ? (
        <ResultContainer cocktails={resultsByIngredient} />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};
