import React, { Fragment, useContext } from "react";
import { FORMDIV, DIV, H1 } from "../HomeDesign";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ownCocktail.scss";
import { AllIngredientsContext } from "./IngredientsContext";

export const CreateOwnCocktail = () => {
    const [allIngredients] = useContext(AllIngredientsContext);

    return (
        <Fragment>
            <H1>Create your cocktail</H1>
            <Form
                className="form-detail"
                method="post"
                encType="multipart/form-data"
            >
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
                    <Button variant="secondary" type="submit" size="lg">
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
                            <div key={ingredient.idIngredient} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id={ingredient.idIngredient}
                                    label={ingredient.strIngredient}
                                    value={ingredient.strIngredient}
                                    onChange
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

export default CreateOwnCocktail;