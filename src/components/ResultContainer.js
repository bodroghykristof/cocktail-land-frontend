import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DynamicScroller from "./scrolling/DynamicScroller";

export default function ResultContainer(props) {
    console.log(props);
    return (
        <Fragment>
            {props.alcoholicCocktails.length > 0 ? (
                <Fragment>
                    <h3>Alcoholic cocktails by name:</h3>
                    <DynamicScroller>
                        {props.alcoholicCocktails.map((cocktail) => (
                            <p>{cocktail.strDrink}</p>
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
            {props.nonAlcoholicCocktails.length > 0 ? (
                <Fragment>
                    <h3>Non alcoholic cocktails by name:</h3>
                    <DynamicScroller>
                        {props.nonAlcoholicCocktails.map((cocktail) => (
                            <p>{cocktail.strDrink}</p>
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
            {props.alcoholicIngredients.length > 0 ? (
                <Fragment>
                    <h3>Alcoholic cocktails by ingredient:</h3>
                    <DynamicScroller>
                        {props.alcoholicIngredients.map((cocktail) => (
                            <p>{cocktail.strDrink}</p>
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
            {props.nonAlcoholicIngredients.length > 0 ? (
                <Fragment>
                    <h3>Non alcoholic cocktails by ingredient:</h3>
                    <DynamicScroller>
                        {props.nonAlcoholicIngredients.map((cocktail) => (
                            <p>{cocktail.strDrink}</p>
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
        </Fragment>
    );
}

ResultContainer.propTypes = {
    alcoholicCocktails: PropTypes.array,
    nonAlcoholicCocktails: PropTypes.array,
    alcoholicIngredients: PropTypes.array,
    nonAlcoholicIngredients: PropTypes.array,
};
