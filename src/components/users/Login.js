import React, { useState, useRef } from "react";
import UserFormContainer from "./UserFormContainer";
import "../css/loginpage.scss";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const checkLogin = () => {
    const emailInput = email.current.value;
    const passwordInput = password.current.value;

    if (emailInput === "" || passwordInput === "") {
      setErrorMessage("Please fill out all input fields!");
    } else {
      window.location.replace("/test");
    }
  };

  return (
    <div className="login-page">
      <Form className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password}/>
        </Form.Group>

        <Form.Group controlId="formBasicError">
          <Form.Text>{errorMessage}</Form.Text>
        </Form.Group>

        <Button variant="secondary" type="button" onClick={checkLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
