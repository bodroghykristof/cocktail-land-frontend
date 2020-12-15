import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DynamicScroller from "./scrolling/DynamicScroller";

export default function ResultContainer(props) {
    console.log(props);
    return (
        <Fragment>
            <h3>Alcoholic:</h3>
            <DynamicScroller>
                {props.alcoholicCocktails.map((cocktail) => (
                    <p>{cocktail.strDrink}</p>
                ))}
            </DynamicScroller>
            <h3>Non alcoholic:</h3>
            <DynamicScroller>
                {props.nonAlcoholicCocktails.map((cocktail) => (
                    <p>{cocktail.strDrink}</p>
                ))}
            </DynamicScroller>
        </Fragment>
    );
}

ResultContainer.propTypes = {
    cocktails: PropTypes.array,
};
