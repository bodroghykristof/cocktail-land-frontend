import React from 'react';
import PropTypes from 'prop-types';
import ResultDesk from '../elements/ResultDesk';

export default function ResultContainer(props) {
  return (
    <ResultDesk>
      {props.cocktails.map((cocktail) => (
        <p>{cocktail.strDrink}</p>
      ))}
    </ResultDesk>
  );
}

ResultContainer.propTypes = {
  cocktails: PropTypes.array,
};
