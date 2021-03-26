import React, { useState, useContext } from "react";
import { CheckedIngredientsContext } from "./CheckedIngredientsContext";
import { Form } from "react-bootstrap";
import "./ownCocktail.scss";

export const Ingredient = ({ ingredient }) => {
    const [checked, setChecked] = useState(false);
    const [checkedIngredients, setCheckedIngredients] = useContext(
        CheckedIngredientsContext
    );

    const handleChange = (e) => {
        checked ? setChecked(false) : setChecked(true);

        if (e.target.checked) {
            setCheckedIngredients([...checkedIngredients, ingredient.id]);
        } else {
            const ingredients = checkedIngredients.filter(
                (ingredient) => ingredient.idIngredient !== e.target.id
            );
            setCheckedIngredients(ingredients);
        }
    };

    return (
        <div key={ingredient.idIngredient} className="mb-3" className="">
            <Form.Check
                className="check"
                type="checkbox"
                id={ingredient.idIngredient}
                label={ingredient.strIngredient}
                checked={checked}
                onChange={handleChange}
            />
        </div>
    );
};

export default Ingredient;
