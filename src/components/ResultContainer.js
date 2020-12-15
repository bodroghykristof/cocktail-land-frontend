import React from 'react';
import PropTypes from 'prop-types';
import ResultDesk from '../elements/ResultDesk';
import DynamicScroller from './scrolling/DynamicScroller';

export default function ResultContainer(props) {
  return (
    <DynamicScroller>
      {props.cocktails.map((cocktail) => (
        <p>{cocktail.strDrink}</p>
      ))}
    </DynamicScroller>
  );
}

ResultContainer.propTypes = {
  cocktails: PropTypes.array,
};
