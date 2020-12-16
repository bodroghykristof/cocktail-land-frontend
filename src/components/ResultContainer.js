import React from 'react';
import PropTypes from 'prop-types';
import SearchCard from './SearchCard';
import DynamicScroller from './scrolling/DynamicScroller';

export default function ResultContainer(props) {
  return (
    <DynamicScroller>
      {props.cocktails.map((cocktail) => (
        <SearchCard data={cocktail}></SearchCard>
      ))}
    </DynamicScroller>
  );
}

ResultContainer.propTypes = {
  cocktails: PropTypes.array,
};
