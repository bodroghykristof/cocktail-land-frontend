import React, { Fragment, useContext } from "react";
import { DIV, H1 } from "../HomeDesign";
import { LanguageContext } from "../language/LanguageContext";
import { OwnCocktailsContext } from "./OwnCocktailsContext";
import dictionary from "../language/Dictionary";
import { Link } from "react-router-dom";
import { CocktailCard } from "../CocktailCard";
import "./ownCocktail.scss";

export const OwnCocktail = () => {
    const [language] = useContext(LanguageContext);
    const [ownCocktails] = useContext(OwnCocktailsContext);

    return (
        <Fragment>
            <H1>Own cocktails</H1>
            <Link className="create-link" to="/create-own">
                {dictionary.createCocktail[language]}
            </Link>
            <DIV>
                {ownCocktails.map((cocktail) => (
                    <CocktailCard
                        cocktail={cocktail}
                        key={cocktail.id}
                        own={true}
                    />
                ))}
            </DIV>
        </Fragment>
    );
};

export default OwnCocktail;
