import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";
import { LanguageContext } from "../language/LanguageContext";
import dictionary from "../language/Dictionary";
import { H1 } from "../HomeDesign";
import { FavoritesContext } from "../FavoritesContext";
import Private from "../../auth/Private";
import FavoriteIconHearth from "../FavoriteIconHearth";
import "../../components/css/cocktailDetail.scss";

const OwnCocktailDetail = () => {

    const [ownCocktails, setOwnCocktails] = useState([]);
    const { id } = useParams();

    const [cocktail, setCocktail] = useState({});

    // const [iconValue, setIconValue] = useState(
    //     favorites
    //         .map((cocktail) => cocktail.idDrink.toString())
    //         .includes(id.toString())
    // );

    const [language] = useContext(LanguageContext);
    const [ingredients, setIngredients] = useState([]);

    const titleRef = useRef(null);
    const ingredientList = useRef(null);
    const pic = useRef(null);
    const instructions = useRef(null);

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

        gsap.from(instructions.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });
    }, []);

    useEffect(() => {
        const cocktail = ownCocktails.find(
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
    }, [ownCocktails, id]);

    if (cocktail === undefined) {
        return null;
    }

    return (
        <Fragment>
            <H1 className="cocktail-title" ref={titleRef}>
                {cocktail.strDrink}
            </H1>
            <div className="cocktail-detail">
                <div className="first-column">
                    <div ref={pic} className="image-container">
                        <img
                            className="cocktail-pic"
                            src={cocktail.strDrinkThumb}
                            alt="cocktail"
                        />
                        
                    </div>
                    <div ref={ingredientList} className="ingredients-container">
                        <h2>{dictionary.ingredient[language]}</h2>
                        <div className="ingredients-box">
                            {ingredients.map((ingredient) => (
                                <a
                                    href={`/ingredient/${ingredient.name}/${id}`}
                                    key={ingredient.id}
                                >
                                    <div className="ingredient">
                                        {ingredient.name}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <div ref={instructions} className="instructions-container">
                        <h2>{dictionary.instructions[language]}</h2>
                        {language === "english" ? (
                            <div>{cocktail.strInstructions}</div>
                        ) : (
                            <div>{cocktail.strInstructionsDE}</div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default OwnCocktailDetail;
