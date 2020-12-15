import React, { useContext } from 'react';
import { H1 } from './CocktailCardDesign';
import { FavoritesContext } from './FavoritesContext';
import { CocktailCard } from './CocktailCard';

export const FavoriteCocktails = () => {

    const [favorites] = useContext(FavoritesContext);

    let content = `<p>Loading your fantastic Favorites.....</p>`;

    if( favorites.length > 0 ) {
        content = (favorites.map((cocktail) => ( 
            <CocktailCard cocktail={cocktail}
            key={cocktail.idDrink}
            />
        )))
    } else {
        content = <H1>You don't have any favorite Cocktails :(</H1>
    }
    return content;
}
