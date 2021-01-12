import styled from 'styled-components';

const UserFormContainer = styled.div`
  background-color: grey;
  text-align: center;
  /* border: ${(props) => props.theme.borderSecondary}; */
  border-collapse: collapse;
  border-radius: 10px;
  width: 40%;
  margin: auto;
  padding-top: 20px;

  input[type='text'],
  input[type='password'] {
    margin-bottom: 20px;
    border-radius: 5px;
    color: white;
    font-weight: 750;
    width: 25%;

    background-color: transparent;
    border: none;
    border-bottom: solid black 1px;
    text-align: center;
    padding-top: 1px;

    &:focus {
      transition: all 0.6s ease-in-out;
      outline: none;
      border-bottom: solid white 1px;
      width: 30%;
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
