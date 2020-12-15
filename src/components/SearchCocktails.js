import React, { useContext } from 'react';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {

    const [allCocktails] = useContext(AllCocktailsContext);
    console.log(allCocktails);  

    return (
        <React.Fragment>
        <h1>Search Cocktails</h1>
        <p>Yes, Cocktails</p>
        </React.Fragment>
    )

}

