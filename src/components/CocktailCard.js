import React from 'react';
import { Link } from 'react-router-dom';
import { P, linkStyle, IMG, Card, SPAN } from './CocktailCardDesign';
import FavoriteIconHearth from './FavoriteIconHearth';
import Private from '../auth/Private';

export const CocktailCard = (props) => {
  const cocktail = props.cocktail;

  let content = (
    <Link to={`cocktail/${cocktail.idDrink}`} style={linkStyle}>
      <Card className='card'>
        <IMG src={cocktail.strDrinkThumb}></IMG>
        <SPAN>
          <P>{cocktail.strDrink}</P>
          <Private>
            <FavoriteIconHearth
              cocktail={cocktail}
              key={cocktail.idDrink}
              value={props.value}
            />
          </Private>
        </SPAN>
      </Card>
    </Link>
  );
  return content;
};
