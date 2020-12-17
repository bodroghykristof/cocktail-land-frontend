import styled from "styled-components";

const ScrollContent = styled.div`
    background-image: ${(props) => `url(${props.background})`};
    flex: 0 0 150px;
    text-align: center;
    margin: 0 2px;
    height: 150px;
    width: 150px;
    transition: transform 300ms ease 50ms;

    &:hover ~ & {
        transform: translateX(10%);
    }

    &:hover {
        transform: scale(1.2) !important;
        box-shadow: 1px 1px 10px -2px #000000;
        transition: 0.3s all ease-in;
    }
`;

export default ScrollContent;
