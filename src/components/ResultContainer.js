import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DynamicScroller from "./scrolling/DynamicScroller";

export default function ResultContainer(props) {
    console.log(props);
    return (
        <Fragment>
            <DynamicScroller>
                <p>Alcoholic:</p>

                {props.alcoholicCocktails.map((cocktail) => (
                    <p>{cocktail.strDrink}</p>
                ))}
            </DynamicScroller>
            <DynamicScroller>
                <p>Non alcoholic:</p>
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
