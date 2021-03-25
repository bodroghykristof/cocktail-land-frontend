import React, { createContext, useEffect, useState } from "react";
import apiService from "../services/Api";

export const AllIngredientsContext = createContext();

export const AllIngredientsProvider = (props) => {
    const [allIngredients, setAllIngredients] = useState([]);

    useEffect(() => {

        const t = (array, key) => {
            console.log(array)
            return array.reduce((result, currentValue) => {
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                    currentValue
                );
                return result;
            }, {});
        };



        async function fetchIngredients() {
            const token = localStorage.getItem("token");
            const result = await apiService.getAllIngredients(token);
            const z = t(result.data, 'strType');
            setAllIngredients(z);
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
