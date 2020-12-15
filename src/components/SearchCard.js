import React from 'react';

export default function SearchCard(props) {
  const style = {
    backgroundImage: `url(${props.data.strDrinkThumb})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `100%`,
  };

  return (
    <div style={style}>
      <p>{props.data.strDrink}</p>
    </div>
  );
}
