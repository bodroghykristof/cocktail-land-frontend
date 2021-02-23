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
            <FORMDIV>
                <div className="form-container">
                    <Form
                        className="form-detail"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <div className="stm">
                            <div className="cocktail-detail-container">
                                <Form.Group controlId="formUploadPic">
                                    <Form.Label>
                                        Upload cocktail picture
                                    </Form.Label>
                                    <Form.File type="file" name="imageUpload" />
                                </Form.Group>
                                <Form.Group controlId="formCocktailName">
                                    <Form.Label>Cocktail name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCocktailDescription">
                                    <Form.Label>
                                        Cocktail description
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </div>

                            <div className="ingredients-container">
                                <Form.Group controlId="formCocktailIngredients">
                                    <Form.Label>
                                        Cocktail ingredients
                                    </Form.Label>
                                    {allIngredients.map((ingredient) => (
                                        <div
                                            key={ingredient.idIngredient}
                                            className="mb-3"
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                id={ingredient.idIngredient}
                                                label={ingredient.strIngredient}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </div>
            </FORMDIV>
        </Fragment>
    );
};

export default CreateOwnCocktail;
