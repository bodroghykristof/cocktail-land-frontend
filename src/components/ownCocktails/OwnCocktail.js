import React, { Fragment, useContext } from "react";
import { DIV, H1 } from "../HomeDesign";
import { LanguageContext } from "../language/LanguageContext";
import dictionary from "../language/Dictionary";
import { Link } from "react-router-dom";

export const OwnCocktail = () => {
    const [language] = useContext(LanguageContext);

    let content = `<p>Loading your handmade Cocktails.....</p>`;

    return (
        <Fragment>
            <H1>Own cocktails</H1>
            <div>
                <Link className="link" to="/create-own">
                    {dictionary.createCocktail[language]}
                </Link>
            </div>
        </Fragment>
    );
};

export default OwnCocktail;
