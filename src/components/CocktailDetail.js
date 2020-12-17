import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { AllCocktailsContext } from "./AllCocktailsContext";
import { useContext, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";
import { LanguageContext } from "./language/LanguageContext";
import dictionary from "./language/Dictionary";
import { H1 } from "./HomeDesign";

import "../components/css/cocktailDetail.scss";

const CocktailDetail = () => {
    const [allCocktails] = useContext(AllCocktailsContext);
    const [language] = useContext(LanguageContext);
    const [cocktail, setCocktail] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const { id } = useParams();

    const titleRef = useRef(null);
    const ingredientList = useRef(null);
    const pic = useRef(null);
    const video = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });
        gsap.from(pic.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });

        gsap.from(ingredientList.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });

        gsap.from(video.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });
    }, []);

    useEffect(() => {
        const cocktail = allCocktails.find(
            (cocktail) => cocktail.idDrink === id.toString()
        );

        setCocktail(cocktail);

        const collectIngredients = () => {
            let ingredientObjects = [];
            if (cocktail !== undefined) {
                for (let index = 1; index < 16; index++) {
                    let value = cocktail[`strIngredient${index}`];
                    if (value !== null && value !== "") {
                        let object = { name: value, id: index };
                        ingredientObjects.push(object);
                    }
                }
            }
            setIngredients(ingredientObjects);
        };

        collectIngredients();
    }, [allCocktails, id]);

    if (cocktail === undefined) {
        return null;
    }

    return (
        <Fragment>
            <H1 ref={titleRef}>{cocktail.strDrink}</H1>
            <div className="cocktail-detail">
                <div className="first-column">
                    <div ref={pic} className="image-container">
                        <img
                            className="cocktailPic"
                            src={cocktail.strDrinkThumb}
                            alt="cocktail"
                        />
                    </div>
                    <div ref={ingredientList} className="ingredients-container">
                        <h2>{dictionary.ingredient[language]}</h2>
                        {ingredients.map((ingredient) => (
                            <div className="ingredient" key={ingredient.id}>
                                <a href={`/ingredient/${ingredient.name}`}>
                                    {ingredient.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="second-column">
                    <div className="instructions-container">
                        <h2>Instructions</h2>
                        <div>{cocktail.strInstructions}</div>
                    </div>
                    {cocktail.strVideo !== null ? (
                        <div ref={video} className="video-container">
                            <h2>How to</h2>
                            <ReactPlayer
                                controls={true}
                                url={cocktail.strVideo}
                                width="360px"
                                height="200px"
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default CocktailDetail;
