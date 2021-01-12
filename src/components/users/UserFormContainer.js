import styled from 'styled-components';

const UserFormContainer = styled.div`
  background-color: rgba(180, 183, 199);
  text-align: center;
  border: solid black 2px;
  border-collapse: collapse;
  border-radius: 10px;
  width: 40%;
  margin: auto;
  height: 270px;
  margin-top: 25vh;
  padding-top: 20px;

  input {
    margin-bottom: 20px;
    border-radius: 5px;
    color: white;
    font-weight: 750;
    width: 35%;
    font-size: 18px;

    background-color: transparent;
    border: none;
    border-bottom: solid black 1px;
    text-align: center;

    &:focus {
      transition: all 0.6s ease-in-out;
      outline: none;
      border-bottom: solid white 1px;
      width: 45%;
    }

    &::placeholder {
      color: white;
      font-weight: normal;
    }
  }

  .error-message {
    height: 1rem;
  }

  #loginConfirmationButton {
    margin-bottom: 20px;
  }

  #forgotPassword:hover {
    font-weight: 900;
    cursor: pointer;
  }
`;

export default UserFormContainer;
