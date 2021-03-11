import React, { createContext, useEffect, useState } from "react";
import apiService from "../services/Api";

export const AllIngredientsContext = createContext();

export const AllIngredientsProvider = (props) => {
    const [allIngredients, setAllIngredients] = useState([]);

    useEffect(() => {
        async function fetchIngredients() {
            const token = localStorage.getItem("token");
            const result = await apiService.getAllIngredients(token);
            setAllIngredients(result.data);
        }
        fetchIngredients();
    }, []);

    return (
        <AllIngredientsContext.Provider
            value={[allIngredients, setAllIngredients]}
        >
            {props.children}
        </AllIngredientsContext.Provider>
    );
};
