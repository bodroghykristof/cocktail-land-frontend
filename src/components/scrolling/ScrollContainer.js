import styled from 'styled-components';

const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 55px;
  overflow-x: hidden;
  width: 100%;

  &:hover div {
    transform: translateX(-25%);
  }
`;

export default ScrollContainer;
