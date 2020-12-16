import styled from 'styled-components';

export const Card = styled.div`
    display: inline-block;
    height: 350px;
    width: 300px;
    border: 3px solid #ebca6c;
    border-radius: 8%;
    padding: 5px 10px;
    margin: 15px;
    background-color: rgba(144,238,144, 0.3);;
    `
export const IMG = styled.img`
  height: 75%;
  width: 90%;
  margin: 10px;
  border-radius: 8%;
  border: 2px solid #ebca6c;
`;

export const P = styled.p`
    margin-top: 8px;
    margin-left: 10px;
    float: left;
    color: #2a2a2b;
    font-size:25px;
    width:70%;
`

export const Button = styled.button`
  margin-top: 20px;
  float: right;
  width: auto;
`;

export const H1 = styled.h1`
    font-size: 80px;
    color: #2a2a2b;
    margin-top: 350px;
`

export const addStyle = {
    color: '#fe667a',
    fontSize: '150%',
};

export const deleteStyle = {
    color: '#fe667a',
    fontSize: '150%',
};
