import styled from 'styled-components';

const ScrollContent = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  flex: 0 0 10%;
  text-align: center;
  margin-right: 2px;
  height: 150px;
  transition: transform 300ms ease 50ms;

  &:hover ~ & {
    transform: translateX(5%);
  }

  &:hover {
    transform: scale(1.1) !important;
    z-index: 5;
  }
`;

export default ScrollContent;
