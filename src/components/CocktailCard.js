import React from 'react';
import { Link } from 'react-router-dom';
import { P, linkStyle, IMG, Card, SPAN } from './CocktailCardDesign';
import FavoriteIconHearth from './FavoriteIconHearth';
import Private from '../auth/Private';

export const CocktailCard = (props) => {
  const cocktail = props.cocktail;

  const id = props.own ? cocktail.id : cocktail.idDrink;
  const url = props.own ? `own-cocktail/${id}` : `cocktail/${id}`;

  let content = (
    <Link to={url} style={linkStyle}>
      <Card className='card'>
        <IMG src={cocktail.strDrinkThumb}></IMG>
        <SPAN>
          <P>{cocktail.strDrink}</P>
          <Private>
            <FavoriteIconHearth
              cocktail={cocktail}
              key={id}
              value={props.value}
            />
          </Private>
        </SPAN>
      </Card>
    </Link>
  );
  return content;
};
