import React, { useState, useContext } from 'react';
import ResultContainer from './ResultContainer';
import { AllCocktailsContext } from './AllCocktailsContext';
import SearchBar from '../elements/SearchBar';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';

export const SearchCocktails = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [alcoholicCocktails, setAlcoholicCocktails] = useState([]);
  const [nonAlcoholicCocktails, setNonAlcoholicCocktails] = useState([]);
  const [alcoholicIngredients, setAlcoholicIngredients] = useState([]);
  const [nonAlcoholicIngredients, setNonAlcoholicIngredients] = useState([]);
  const [language] = useContext(LanguageContext);

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
    separateCocktailsByAlcohol(currentResult);
  };

  const searchCocktailsByIngredient = (keyword) => {
    let currentResult = [];

    for (let cocktail of allCocktails) {
      if (hasIngredient(cocktail, keyword) && keyword !== '') {
        currentResult.push(cocktail);
      }
    }
    separateIngredientsByAlcohol(currentResult);
  };

  const separateCocktailsByAlcohol = (cocktails) => {
    let alcoholicResults = [];
    let nonAlcoholicResults = [];
    for (let cocktail of cocktails) {
      if (cocktail.strAlcoholic.toLowerCase() === 'alcoholic') {
        alcoholicResults.push(cocktail);
      } else if (cocktail.strAlcoholic.toLowerCase() === 'non alcoholic') {
        nonAlcoholicResults.push(cocktail);
      }
    }
    setAlcoholicCocktails(alcoholicResults);
    setNonAlcoholicCocktails(nonAlcoholicResults);
  };

  const separateIngredientsByAlcohol = (ingredients) => {
    let alcoholicResults = [];
    let nonAlcoholicResults = [];
    for (let ingredient of ingredients) {
      if (ingredient.strAlcoholic.toLowerCase() === 'alcoholic') {
        alcoholicResults.push(ingredient);
      } else if (ingredient.strAlcoholic.toLowerCase() === 'non alcoholic') {
        nonAlcoholicResults.push(ingredient);
      }
    }
    setAlcoholicIngredients(alcoholicResults);
    setNonAlcoholicIngredients(nonAlcoholicResults);
  };

  const searchCocktails = (event) => {
    const keyword = event.target.value;
    searchCocktailsByName(keyword);
    searchCocktailsByIngredient(keyword);
  };

  return (
    <React.Fragment>
      <h1>{dictionary.searchTitle[language]}</h1>
      <SearchBar
        type='text'
        placeholder={dictionary.searchPlaceholder[language]}
        onChange={searchCocktails}
      />
      {alcoholicCocktails.length + nonAlcoholicCocktails.length > 0 ||
      alcoholicIngredients.length + nonAlcoholicIngredients.length > 0 ? (
        <ResultContainer
          alcoholicCocktails={alcoholicCocktails}
          nonAlcoholicCocktails={nonAlcoholicCocktails}
          alcoholicIngredients={alcoholicIngredients}
          nonAlcoholicIngredients={nonAlcoholicIngredients}
        />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};
