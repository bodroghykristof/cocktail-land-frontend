import React, { createContext, useState } from "react";

export const CheckedIngredientsContext = createContext();

export const CheckedIngredientsProvider = (props) => {
    const [checkedIngredients, setCheckedIngredients] = useState([]);

    return (
        <CheckedIngredientsContext.Provider
            value={[checkedIngredients, setCheckedIngredients]}
        >
            {props.children}
        </CheckedIngredientsContext.Provider>
    );
};
