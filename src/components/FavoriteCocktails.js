import React, { useContext } from 'react';
import { H1 } from './CocktailCardDesign';
import { FavoritesContext } from './FavoritesContext';
import { CocktailCard } from './CocktailCard';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';

export const FavoriteCocktails = () => {
  const [favorites] = useContext(FavoritesContext);
  const [language] = useContext(LanguageContext);

  let content = `<p>Loading your fantastic Favourites.....</p>`;

  if (favorites.length > 0) {
    content = favorites.map((cocktail) => (
      <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
    ));
  } else {
    content = <H1>{dictionary.noFavourite[language]}</H1>;
  }
  return content;
};
