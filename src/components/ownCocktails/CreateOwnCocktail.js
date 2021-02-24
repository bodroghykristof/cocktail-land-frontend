import React, { Fragment, useContext } from "react";
import { H1 } from "../HomeDesign";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ownCocktail.scss";
import { AllIngredientsContext } from "./IngredientsContext";
import { CheckedIngredientsContext } from "./CheckedIngredientsContext";
import Ingredient from "./Ingredient";

export const CreateOwnCocktail = () => {
    const [allIngredients] = useContext(AllIngredientsContext);
    const [checkedIngredients] = useContext(CheckedIngredientsContext);

    const handleSubmit = () => {
        let matches = document.querySelectorAll(`[checked=true]`);
        console.log(matches);
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
                        />
                    </Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        size="lg"
                        onSubmit={handleSubmit}
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
