import React, { createContext, useEffect, useState } from "react";
import apiService from "../services/Api";

export const OwnCocktailsContext = createContext();

export const OwnCocktailsProvider = (props) => {
    const [ownCocktails, setOwnCocktails] = useState([]);

    useEffect(() => {
        const getOwnCocktails = async (setOwnCocktails) => {
            const token = localStorage.getItem("token");
            const response = await apiService.getOwnCocktails(token);
            console.log(response);
            setOwnCocktails(response.data);
        };

        if (localStorage.getItem("token") !== null) {
            getOwnCocktails(setOwnCocktails);
        }

    }, []);

    return (
        <OwnCocktailsContext.Provider value={[ownCocktails, setOwnCocktails]}>
            {props.children}
        </OwnCocktailsContext.Provider>
    );
};
