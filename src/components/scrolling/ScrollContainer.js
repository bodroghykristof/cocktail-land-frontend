import styled from "styled-components";

const ScrollContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 30px 15px;
    overflow-x: hidden;
    pointer-events: none;
    width: auto;

    & > div {
        pointer-events: auto;
    }

    &:hover > div {
        transform: translateX(-10%);
    }
`;

export default ScrollContainer;
