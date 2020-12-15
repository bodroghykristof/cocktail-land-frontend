import React, { useContext, useState } from "react";
import { AllCocktailsContext } from "./AllCocktailsContext";

export const Home = () => {
    const [cocktails, setCocktails] = useState([]);
    const [allCocktails] = useContext(AllCocktailsContext);
    let cocktailCount = allCocktails.length;

    const getRandomTen = () => {
        let limit = 10;
        let cocktailsArr = [];
        while (0 < limit) {
            let randomCocktail =
                allCocktails[Math.floor(Math.random() * allCocktails.length)];
            cocktailsArr.push(randomCocktail);
            limit--;
        }
        setCocktails(cocktailsArr);
    };

    if (
        allCocktails.length === cocktailCount &&
        cocktails.length === 0 &&
        cocktailCount > 0
    ) {
        getRandomTen();
    }

    return (
        <div>
            <h1>Cocktails in your Life</h1>
            {cocktails.map((cocktail) => (
                <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
            ))}
            <h3>{allCocktails.length}</h3>
        </div>
    );
};
