import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  P,
  linkStyle,
  IMG,
  Card,
  SPAN,
} from './CocktailCardDesign';
import FavoriteIcon from './FavoriteIcon';

export const CocktailCard = (props) => {

  const cocktail = props.cocktail;
  
  let content = (
    <Link to={`cocktail/${cocktail.idDrink}`} style={linkStyle}>
      <Card className='card'>
        <IMG src={cocktail.strDrinkThumb}></IMG>
        <SPAN>
          <P>{cocktail.strDrink}</P>
          <FavoriteIcon cocktail={cocktail} key={cocktail.idDrink} value={props.value}/>
        </SPAN>
      </Card>
    </Link>
  );
  return content;
};