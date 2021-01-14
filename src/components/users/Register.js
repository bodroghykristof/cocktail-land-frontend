import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import apiService from "../services/Api";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/registrationpage.scss";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const userName = useRef(null);
  const email = useRef(null);
  const passwordOne = useRef(null);
  const passwordTwo = useRef(null);
  const history = useHistory();

  const checkRegistration = async () => {
    const userNameInput = userName.current.value;
    const emailInput = email.current.value;
    const passwordOneInput = passwordOne.current.value;
    const passwordTwoInput = passwordTwo.current.value;

    if (
      userNameInput === "" ||
      emailInput === "" ||
      passwordOneInput === "" ||
      passwordTwoInput === ""
    ) {
      setErrorMessage("Please fill out all input fields!");
    } else if (!RegExp("^[^@.]+@[^@.]+\\.[^@.]+$").test(emailInput)) {
      setErrorMessage("Invalid email!");
    } else if (passwordOneInput !== passwordTwoInput) {
      setErrorMessage("Mismatching passwords!");
    } else if (passwordOneInput.length < 5) {
      setErrorMessage("Password must be at least 5 characters!");
    } else {
      const user = {
        name: userNameInput,
        email: emailInput,
        password: passwordOneInput,
      };
      const response = await apiService.register(user);
      if (response.status === 409) setErrorMessage(response.data.message);
      else history.push("/login");
    }
  };

  return (
    <div className="registration-page">
      <Form className="registration-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            ref={userName}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordOne}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Again</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password again"
            ref={passwordTwo}
          />
        </Form.Group>

        <Form.Group controlId="formBasicError">
          <Form.Text>
            {errorMessage === "" ? (
              <span style={{ display: "inline-block", width: "20px" }}></span>
            ) : (
              <span>{errorMessage}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Button
          variant="secondary"
          type="button"
          onClick={(e) => checkRegistration(e)}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
