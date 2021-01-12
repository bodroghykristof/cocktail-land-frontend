import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import UserFormContainer from './UserFormContainer';
import apiService from '../services/Api';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const history = useHistory();

  const forgotPasswordAction = () =>
    alert('Shame on you, we do not have any smart solution for this yet');

  const checkLogin = async () => {
    const emailInput = email.current.value;
    const passwordInput = password.current.value;

    if (emailInput === '' || passwordInput === '') {
      setErrorMessage('Please fill out all input fields!');
    } else if (
      !RegExp('^[^@.]+@[^@.]+\\.[^@.]+$').test(emailInput) ||
      passwordInput.length < 5
    ) {
      setErrorMessage('Invalid email or password');
    } else {
      const user = {
        email: emailInput,
        password: passwordInput,
      };

      const response = await apiService.login(user);
      if (response.status === 401) setErrorMessage(response.data.message);
      else {
        localStorage.setItem('token', response.data.token);
        history.push('/home');
      }
    }
  };

  return (
    <UserFormContainer>
      <input type='text' placeholder='Email' ref={email}></input>
      <br></br>
      <input type='password' placeholder='Password' ref={password}></input>
      <br></br>
      <p>{errorMessage}</p>
      <p id='forgotPassword' onClick={() => forgotPasswordAction()}>
        Forgot my password
      </p>
      <button id='loginConfirmationButton' onClick={checkLogin}>
        Login
      </button>
    </UserFormContainer>
  );
}

export default Login;
