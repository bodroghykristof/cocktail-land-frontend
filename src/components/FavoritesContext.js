import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {

    const [favorites, setFavorites] = useState([]);

    return (
        <CatchContext.Provider value={[favorites, setFavorites]}>
            {props.children}
        </CatchContext.Provider>
    )

}
