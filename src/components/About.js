import React, { useContext } from "react";
import { DIV, H1 } from "./AboutDesign";
import { LanguageContext } from "./language/LanguageContext";
import dictionary from "./language/Dictionary";
import cocktail from "../static/cocktail.png";
import "./welcome/welcome.scss";

export default function About() {
    const [language] = useContext(LanguageContext);

    return (
        <div className="about-container">
            <img
                src={cocktail}
                alt="cocktail"
                className="spinning"
                height="300px"
            />
            <DIV>
                <H1>Cocktail Land</H1>
                <p>{dictionary.aboutText[language]}</p>
            </DIV>
            <img
                src={cocktail}
                alt="cocktail"
                className="spinning"
                height="300px"
            />
        </div>
    );
}
