import React, { Fragment } from "react";
import { FORMDIV, DIV, H1 } from "../HomeDesign";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ownCocktail.scss";

export const CreateOwnCocktail = () => {
    return (
        <Fragment>
            <H1>Create your cocktail</H1>
            <FORMDIV>
                {/* <div className="form-container"> */}
                <Form
                    className="form-detail"
                    method="post"
                    enctype="multipart/form-data"
                >
                    <Form.Group controlId="formUploadPic">
                        <Form.Label>Upload cocktail picture</Form.Label>
                        <Form.File type="file" name="imageUpload" />
                    </Form.Group>
                    <Form.Group controlId="formCocktailName">
                        <Form.Label>Cocktail name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            autocomplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="formCocktailDescription">
                        <Form.Label>Cocktail description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            autocomplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="formCocktailIngredients">
                        <Form.Label>Cocktail ingredients</Form.Label>
                        <p></p>
                        <Form.Control
                            as="select"
                            name="ingredients"
                            autocomplete="off"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                {/* </div> */}
            </FORMDIV>
        </Fragment>
    );
};

export default CreateOwnCocktail;
