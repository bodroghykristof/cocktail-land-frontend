import React from "react";
import PropTypes from "prop-types";
import ResultDesk from "../elements/ResultDesk";

export default function ResultContainer(props) {
    console.log(props);
    return (
        <ResultDesk>
            <p>Alcoholic:</p>
            {props.alcoholicCocktails.map((cocktail) => (
                <p>{cocktail.strDrink}</p>
            ))}
            <p>Non alcoholic:</p>
            {props.nonAlcoholicCocktails.map((cocktail) => (
                <p>{cocktail.strDrink}</p>
            ))}
        </ResultDesk>
    );
}

ResultContainer.propTypes = {
    cocktails: PropTypes.array,
};
