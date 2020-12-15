import React from "react";
import { useParams } from "react-router-dom";
import { AllCocktailsContext } from "./AllCocktailsContext";
import { useContext, useEffect, useState } from "react";

const CoctailDetail = () => {
  const [allCoctails] = useContext(AllCocktailsContext);
  const [coctail, setCoctail] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const coctail = allCoctails.find(
      (coctail) => coctail.idDrink === id.toString()
    );

    setCoctail(coctail);
    console.log(coctail);

    const collectIngredients = () => {
      let ingredientObjects = [];
      if (coctail !== undefined) {
        for (let index = 1; index < 16; index++) {
          for (let [key, value] of Object.entries(coctail)) {
            if (key.toString() === `strIngredient${index}` && value !== null) {
              let object = { name: value, id: index };
              ingredientObjects.push(object);
            }
          }
        }
      }
      setIngredients(ingredientObjects);
    };

    collectIngredients();
  }, [allCoctails, id]);

  if (coctail === undefined) {
    return null;
  }

  return (
    <div className="cocktail-deatil">
      <p>Coctail Detail Page {id}</p>
      <p>{coctail.idDrink}</p>
      <p>{coctail.strDrink}</p>
      <img src={coctail.strDrinkThumb} alt="coctail" />
      {ingredients.map((ingredient) => (
          <p key={ingredient.id}>{ingredient.name}</p>
      ))}

      {console.log(ingredients)}
    </div>
  );
};

export default CoctailDetail;
