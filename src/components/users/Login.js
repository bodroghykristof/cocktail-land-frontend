import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../css/loginpage.scss";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import apiService from "../services/Api";
import { FavoritesContext } from "../FavoritesContext";
import { IsLoggedInContext } from "../../auth/IsLoggedInContext";

function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const history = useHistory();
    const [favorites, setFavorites] = useContext(FavoritesContext);
    const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

    const checkLogin = async () => {
        const emailInput = email.current.value;
        const passwordInput = password.current.value;

        if (emailInput === "" || passwordInput === "") {
            setErrorMessage("Please fill out all input fields!");
        } else if (
            !RegExp("^[^@.]+@[^@.]+\\.[^@.]+$").test(emailInput) ||
            passwordInput.length < 5
        ) {
            setErrorMessage("Invalid email or password");
        } else {
            const user = {
                email: emailInput,
                password: passwordInput,
            };

            const response = await apiService.login(user);
            if (response.status === 401) setErrorMessage(response.data.message);
            else {
                localStorage.setItem("token", response.data.token);
                const usersFavourites = await apiService.getFavoriteCoctails(
                    localStorage.getItem("token")
                );
                setFavorites(usersFavourites.data);
                setIsLoggedIn(true);
                history.push("/home");
            }
        }
    };

    const handleKeypress = (e) => {
        if (e.key === "Enter") {
            checkLogin();
        }
    };

    return (
        <div className="login-page">
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        ref={email}
                        onKeyPress={handleKeypress}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        ref={password}
                        onKeyPress={handleKeypress}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicError">
                    <Form.Text>
                        {errorMessage === "" ? (
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "20px",
                                }}
                            ></span>
                        ) : (
                            <span
                                style={{
                                    color: "red",
                                    fontSize: "medium",
                                }}
                            >
                                {errorMessage}
                            </span>
                        )}
                    </Form.Text>
                </Form.Group>

                <Button variant="secondary" type="button" onClick={checkLogin}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
