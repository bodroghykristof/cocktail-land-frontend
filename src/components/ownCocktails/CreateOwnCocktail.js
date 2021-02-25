import React, { Fragment, useContext, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { H1 } from "../HomeDesign";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ownCocktail.scss";
import { AllIngredientsContext } from "./IngredientsContext";
import { CheckedIngredientsContext } from "./CheckedIngredientsContext";
import Ingredient from "./Ingredient";
import apiService from "../services/Api";


export const CreateOwnCocktail = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [allIngredients] = useContext(AllIngredientsContext);
    const [checkedIngredients] = useContext(CheckedIngredientsContext);
    const history = useHistory();

    const name = useRef(null);
    const description = useRef(null);

    const handleSubmit = async (e) => {
        console.log("handel submit ");
        e.preventDefault();
        const nameInput = name.current.value;
        const descriptionInput = description.current.value;

        if (nameInput === "" || descriptionInput === "") {
            setErrorMessage("Please fill out all input fields!");
            console.log("neszeeee", errorMessage);
        } else {
            const ownCocktail = {
                strDrink: nameInput,
                strInstructions: descriptionInput,
                ingredients: checkedIngredients
            };

            const token = localStorage.getItem('token');
            const response = await apiService.saveOwnCocktail(token, ownCocktail);
        }
    };

    return (
        <Fragment>
            <H1>Create your cocktail</H1>
            <Form className="form-detail" encType="multipart/form-data">
                <div className="cocktail-detail-container">
                    <Form.Group controlId="formUploadPic">
                        <Form.Label>Upload cocktail picture</Form.Label>
                        <Form.File type="file" size="lg" name="imageUpload" />
                    </Form.Group>
                    <Form.Group controlId="formCocktailName">
                        <Form.Label>Cocktail name</Form.Label>
                        <Form.Control
                            type="text"
                            size="lg"
                            name="name"
                            autoComplete="off"
                            ref={name}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCocktailDescription">
                        <Form.Label>Cocktail description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            size="lg"
                            name="description"
                            autoComplete="off"
                            ref={description}
                        />
                    </Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        size="lg"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
                <Form.Group
                    controlId="formCocktailIngredients"
                    className="ingredients-container"
                >
                    <Form.Label>Cocktail ingredients</Form.Label>
                    <div className="ingredients">
                        {allIngredients.map((ingredient) => (
                            <Ingredient
                                key={ingredient.idIngredient}
                                ingredient={ingredient}
                            />
                        ))}
                    </div>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

export default CreateOwnCocktail;
