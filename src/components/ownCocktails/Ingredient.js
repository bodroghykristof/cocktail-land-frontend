import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export const Ingredient = ({ ingredient }) => {
    const [checked, setChecked] = useState(null);

    useEffect(() => {
        if (checked === null) {
            setChecked(false);
        }
    }, []);

    const handleChange = (e) => {
        console.log(checked);
        checked ? setChecked(false) : setChecked(true);
        console.log(checked);
        console.log(e.target.checked);
    };

    return (
        <div key={ingredient.idIngredient} className="mb-3">
            <Form.Check
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
