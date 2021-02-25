import React, { Fragment, useContext, useState, useEffect } from "react";
import { DIV, H1 } from "../HomeDesign";
import { LanguageContext } from "../language/LanguageContext";
import dictionary from "../language/Dictionary";
import { Link } from "react-router-dom";
import { CocktailCard } from "../CocktailCard";
import apiService from "../services/Api";

export const OwnCocktail = () => {

    const [language] = useContext(LanguageContext);
    const [ownCocktails, setOwnCocktails] = useState([]);

    useEffect( () => {

        const getOwnCocktails = async () => {
            const token = localStorage.getItem("token");
            const response = await apiService.getOwnCocktails(token);
            console.log(response);
            setOwnCocktails(response.data);
        }
        
        if (localStorage.getItem("token") !== null) {
            getOwnCocktails(setOwnCocktails);
        } 
    }, []);


    let content = `<p>Loading your handmade Cocktails.....</p>`;

    return (
        <Fragment>
            <H1>Own cocktails</H1>
            <div>
                <Link className="link" to="/create-own">
                    {dictionary.createCocktail[language]}
                </Link>
            </div>
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
