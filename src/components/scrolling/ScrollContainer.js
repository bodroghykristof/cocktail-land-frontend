import styled from 'styled-components';

const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 55px 0;
  padding-left: 10px;
  overflow-x: hidden;
  margin: auto;
  width: 90%;
  pointer-events: none;

  & > div {
    pointer-events: auto;
    z-index: 10;
  }

  &:hover > div {
    transform: translateX(-5%);
  }
`;

export default ScrollContainer;
