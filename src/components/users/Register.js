import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import UserFormContainer from './UserFormContainer';
import RegisterButton from '../layout/Button';
import apiService from '../services/Api';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
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
      userNameInput === '' ||
      emailInput === '' ||
      passwordOneInput === '' ||
      passwordTwoInput === ''
    ) {
      setErrorMessage('Please fill out all input fields!');
    } else if (!RegExp('^[^@.]+@[^@.]+\\.[^@.]+$').test(emailInput)) {
      setErrorMessage('Invalid email!');
    } else if (passwordOneInput !== passwordTwoInput) {
      setErrorMessage('Mismatching passwords!');
    } else if (passwordOneInput.length < 5) {
      setErrorMessage('Password must be at least 5 characters!');
    } else {
      const user = {
        name: userNameInput,
        email: emailInput,
        password: passwordOneInput,
      };
      const response = await apiService.register(user);
      if (response.status === 409) setErrorMessage(response.data.message);
      else history.push('/login');
    }
  };

  return (
    <UserFormContainer>
      <input type='text' placeholder='Username' ref={userName}></input>
      <br></br>
      <input type='email' placeholder='Email' ref={email}></input>
      <br></br>
      <input type='password' placeholder='Password' ref={passwordOne}></input>
      <br></br>
      <input
        type='password'
        placeholder='Password Again'
        ref={passwordTwo}
      ></input>
      <br></br>
      <p className='error-message'>{errorMessage}</p>
      <br></br>
      <RegisterButton
        id='loginConfirmationButton'
        onClick={(e) => checkRegistration(e)}
      >
        Register
      </RegisterButton>
    </UserFormContainer>
  );
}

export default Register;
