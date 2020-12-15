import React, { useState, createContext } from 'react';

export const AllCocktailsContext = createContext();

export const AllCocktailsProvider = (props) => {

    const [allCocktails, setAllCocktails] = useState([]);

    return (
        <AllCocktailsContext.Provider value={[allCocktails, setAllCocktails]}>
            {props.children}
        </AllCocktailsContext.Provider>
    )

}



