import React, { useState, useContext } from 'react';
import ResultCard from './ResultCard';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [resultsByName, setResultsByName] = useState([]);

  const searchCocktailsByName = (event) => {
    const keyword = event.target.value;
    for (let cocktail of allCocktails) {
      setResultsByName([]);
      if (cocktail.strDrink.startsWith(keyword) && keyword !== '') {
        console.log(cocktail.strDrink);
      }
    }
  };

  return (
    <React.Fragment>
      <h1>Search Cocktails</h1>
      <input type='text' onChange={searchCocktailsByName}></input>
      <ResultCard cocktails={resultsByName} />
    </React.Fragment>
  );
};
