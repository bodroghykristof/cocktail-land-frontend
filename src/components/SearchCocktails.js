import React, { useState, useContext } from 'react';
import ResultContainer from './ResultContainer';
import SearchBar from '../elements/SearchBar';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [resultsByName, setResultsByName] = useState([]);
  const [resultsByIngredient, setResultsByIngredient] = useState([]);

  const hasIngredient = (cocktail, searchedIngredient) => {
    for (let i = 1; i <= 15; i++) {
      const key = `strIngredient${i.toString()}`;
      if (cocktail[key] === null) {
        return false;
      } else if (
        cocktail[key].toLowerCase() === searchedIngredient.toLowerCase()
      ) {
        return true;
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
      if (hasIngredient(cocktail, keyword) && keyword !== '') {
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
      <SearchBar
        type='text'
        placeholder='Find your cocktail...'
        onChange={searchCocktails}
      ></SearchBar>
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
