import React, { useContext } from 'react';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {

    const [allCocktails] = useContext(AllCocktailsContext);
    console.log("Length of All Cocktails list:", allCocktails.length)

    return (
        <React.Fragment>
        <h1>Search Cocktails</h1>
        <p>Yes, Cocktails</p>
        </React.Fragment>
    )

}

