import React, { useContext, Fragment } from "react";
import { DIV, H1 } from "./HomeDesign";
import { FavoritesContext } from "./FavoritesContext";
import { CocktailCard } from "./CocktailCard";
import { LanguageContext } from "./language/LanguageContext";
import dictionary from "./language/Dictionary";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

export const FavoriteCocktails = () => {
    const [favorites] = useContext(FavoritesContext);
    const [language] = useContext(LanguageContext);

    let content = `<p>Loading your fantastic Favourites.....</p>`;

    if (favorites.length > 0) {
        content = (
            <Fragment>
                <H1>Favourites</H1>
                <DIV>
                    {favorites.map((cocktail) => (
                        <CocktailCard
                            cocktail={cocktail}
                            key={cocktail.idDrink}
                        />
                    ))}
                </DIV>
            </Fragment>
        );
    } else {
        content = (
            <Fragment>
                <H1>{dictionary.noFavourite[language]}</H1>
                <SentimentVeryDissatisfiedIcon
                    style={{ fontSize: "50px", marginTop: "10px" }}
                />
            </Fragment>
        );
    }
    return content;
};
