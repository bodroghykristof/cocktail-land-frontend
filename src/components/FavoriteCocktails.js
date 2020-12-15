import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Div, P, Button, IMG, Card, Span } from './CocktailCardDesign';
import { FavoritesContext } from './FavoritesContext';
import { CocktailCard } from './CocktailCard';

export const FavoriteCocktails = () => {

    const [favorites] = useContext(FavoritesContext);

    let content = `<p>Loading your fantastic Favorites.....</p>`;

    if(favorites) {
        content = (favorites.map((cocktail) => ( 
            <CocktailCard cocktail={cocktail}
            key={cocktail.idDrink}
            />
        )))
    } else {
        content = `<p>You don't have any favorite Cocktails :(</p>`
    }
    return content;
}
