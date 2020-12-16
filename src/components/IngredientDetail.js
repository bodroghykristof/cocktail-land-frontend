import React from "react";
import { useParams } from "react-router-dom";
import "../components/css/ingredientDetail.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalBarIcon from "@material-ui/icons/LocalBar";

const IngredientDetail = () => {
  const [ingredients, setIngredients] = useState([]);

  let { name } = useParams();

  useEffect(() => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;
    axios.get(url).then((response) => {
      const ingredientDetail = response.data.ingredients;
      setIngredients(ingredientDetail);
    });
  }, [name]);

  if (ingredients[0] === undefined) {
    return null;
  }

  return (
    <div className="ingredient-detail">
      {console.log(ingredients)}
      <h1 className="ingredient-title">
        Ingredient: {ingredients[0].strIngredient}
      </h1>
      {ingredients[0].strDescription !== null ? (
        <div className="ingredient-description-container">
          <div className="ingredient-description-text">
            {ingredients[0].strDescription}
          </div>
        </div>
      ) : (
        ""
      )}

      {ingredients[0].strAlcohol === "No" ? (
        <h1 className="ingredient-alcohol">
          <span>
            <FreeBreakfastIcon />
          </span>
          Alcohol:
          {ingredients[0].strAlcohol}
        </h1>
      ) : ingredients[0].strAlcohol === "Yes" ? (
        <h1 className="ingredient-not-alcohol">
          <span>
            <LocalBarIcon />
          </span>
          Alcohol:
          {ingredients[0].strAlcohol}
        </h1>
      ) : (
        <h1 className="ingredient-alcohol">
          <span>
            <FreeBreakfastIcon />
          </span>
          Alcohol: Who knows
        </h1>
      )}

      {ingredients[0].strABV === null ? (
        <h1 className="ingredient-alcohol">
          0<span>%</span>
        </h1>
      ) : (
        <h1 className="ingredient-not-alcohol">
          {ingredients[0].strABV}
          <span>%</span>
        </h1>
      )}
    </div>
  );
};

export default IngredientDetail;
