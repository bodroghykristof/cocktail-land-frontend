import styled from 'styled-components';

const ScrollContent = styled.div`
  background: green;
  flex: 0 0 20%;
  text-align: center;
  margin: 0 2px;
  height: 70px;
  transition: transform 300ms ease 50ms;

  &:hover ~ & {
    transform: translateX(25%);
  }

  &:hover {
    transform: scale(1.5) !important;
  }
`;

export default ScrollContent;
