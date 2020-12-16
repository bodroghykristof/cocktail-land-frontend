import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ResultContainerItem from "./ResultContainerItem";

export default function ResultContainer(props) {
    return (
        <Fragment>
            <ResultContainerItem
                cocktails={props.alcoholicCocktails}
                search="name"
            />
            <ResultContainerItem
                cocktails={props.nonAlcoholicCocktails}
                search="name"
            />
            <ResultContainerItem
                cocktails={props.alcoholicIngredients}
                search="ingredient"
            />
            <ResultContainerItem
                cocktails={props.nonAlcoholicIngredients}
                search="ingredient"
            />
        </Fragment>
    );
}

ResultContainer.propTypes = {
    alcoholicCocktails: PropTypes.array,
    nonAlcoholicCocktails: PropTypes.array,
    alcoholicIngredients: PropTypes.array,
    nonAlcoholicIngredients: PropTypes.array,
};
