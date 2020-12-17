import React, { useContext, useState } from "react";
import { AllCocktailsContext } from "./AllCocktailsContext";
import { CocktailCard } from "./CocktailCard";
import { H1, DIV } from "./HomeDesign";
import { LanguageContext } from "./language/LanguageContext";
import dictionary from "./language/Dictionary";

// 178311

export const Home = () => {
    const [cocktails, setCocktails] = useState([]);
    const [allCocktails] = useContext(AllCocktailsContext);
    const [language] = useContext(LanguageContext);
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
            <H1>{dictionary.homeTitle[language]}</H1>
            <DIV>
                {cocktails.map((cocktail) => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </DIV>
        </div>
    );
};
