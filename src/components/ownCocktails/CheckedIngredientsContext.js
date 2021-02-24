import React, { createContext, useEffect, useState } from "react";

export const CheckedIngredientsContext = createContext();

export const CheckedIngredientsProvider = (props) => {
    const [checkedIngredients, setCheckedIngredients] = useState([]);

    return (
        <AllIngredientsContext.Provider
            value={[checkedIngredients, setCheckedIngredients]}
        >
            {props.children}
        </AllIngredientsContext.Provider>
    );
};
