import styled from "styled-components";

export const Card = styled.div`
    height: 350px;
    width: 300px;
    border: 3px solid #ebca6c;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 15px;
    background-color: rgba(144, 238, 144, 0.3);
    box-shadow: 1px 1px 25px -2px #000000;
`;

export const IMG = styled.img`
    width: 90%;
    margin: auto;
    margin-top: 8px;
    border-radius: 10px;
    border: 2px solid #ebca6c;
`;

export const P = styled.p`
    color: #2a2a2b;
    font-size: 23px;
    width: 70%;
`;

export const H1 = styled.h1`
    font-size: 80px;
    color: #2a2a2b;
    margin-top: 350px;
`;

export const SPAN = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const favoriteIconStyle = {
    color: "#fe667a",
    fontSize: "150%",
    cursor: "pointer",
};

export const linkStyle = {
    textDecoration: "none",
};
