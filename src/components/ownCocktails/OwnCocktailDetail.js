import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
    useRef,
} from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { LanguageContext } from "../language/LanguageContext";
import { OwnCocktailsContext } from "./OwnCocktailsContext";
import dictionary from "../language/Dictionary";
import { H1 } from "../HomeDesign";
import "../../components/css/cocktailDetail.scss";
import CocktailPicture from "../../static/cocktail.png";

const OwnCocktailDetail = () => {
    const [ownCocktails] = useContext(OwnCocktailsContext);
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({});

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



        gsap.from(instructions.current, {
            duration: 1,
            delay: 0.5,
            y: 100,
            opacity: 0,
            scale: 0.5,
        });
    }, []);

    useEffect(() => {
        const ownCocktail = ownCocktails.find((cocktail) => cocktail.id == id);
        setCocktail(ownCocktail);

        const getIngredients = (ownCocktail) => {
            if (
                ownCocktail !== undefined &&
                ownCocktail.hasOwnProperty("ingredients")
            ) {
                const ingredients = ownCocktail.ingredients;
                setIngredients(ingredients.split(","));
            }
        };

        getIngredients(ownCocktail);
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
                            src={CocktailPicture}
                            alt="cocktail"
                        />
                    </div>
                    <div ref={ingredientList} className="ingredients-container">
                        <h2>{dictionary.ingredient[language]}</h2>
                        <div className="ingredients-box">
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="ingredient">
                                    {ingredient}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <div ref={instructions} className="instructions-container">
                        <h2>{dictionary.instructions[language]}</h2>
                        <div>{cocktail.strInstructions}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default OwnCocktailDetail;
