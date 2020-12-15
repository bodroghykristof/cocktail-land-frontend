import React from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from './ScrollContainer';

const ScrollArrow = (props) => {
  let scrollAnimation;
  const difference = props.direction === 'right' ? 2 : -2;

  const scroll = (event) => {
    scrollAnimation = setInterval(
      () =>
        (event.target.parentNode.querySelector(
          ScrollContainer
        ).scrollLeft += difference),
      5
    );
  };

  const stop = () => clearInterval(scrollAnimation);

  return (
    <button onMouseOver={scroll} onMouseLeave={stop}>
      {props.text}
    </button>
  );
};

ScrollArrow.propTypes = {
  direction: PropTypes.string,
  text: PropTypes.string,
};

export default ScrollArrow;
