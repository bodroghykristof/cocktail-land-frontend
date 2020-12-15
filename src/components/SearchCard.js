import React from 'react';

export default function SearchCard(props) {
  const style = {
    backgroundImage: `url(${props.data.strDrinkThumb})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    paddingBottom: `10px`,
  };

  const titleStyle = {
    border: `black 2px solid`,
    background: `white`,
    // minHeight: `30px`,
    marginTop: `20px`,
  };

  return (
    <div style={style}>
      <p style={titleStyle}>{props.data.strDrink}</p>
    </div>
  );
}
