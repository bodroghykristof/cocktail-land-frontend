import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { Div, P, Button, IMG, Card, Span } from './CocktailCardDesign';

export const Favorites = props => {

    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

   const addFavorites = () => {
       
   }

   let content = `<p>Loading your fantastic Favorites.....</p>`;

   return content;
}
