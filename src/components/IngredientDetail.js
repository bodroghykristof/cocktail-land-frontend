import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import '../components/css/ingredientDetail.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { H1 } from './HomeDesign';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const IngredientDetail = () => {
  const [ingredients, setIngredients] = useState([]);

  let { name } = useParams();

  useEffect(() => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;
    axios.get(url).then((response) => {
      const ingredientDetail = response.data.ingredients;
      setIngredients(ingredientDetail);
    });
  }, [name]);

  if (ingredients[0] === undefined) {
    return null;
  }

  return (
    <Fragment>
      <div
        className={
          ingredients[0].strDescription !== null
            ? 'title-container'
            : 'title-container-empty'
        }
      >
        <H1 className='ingredient-title'>{ingredients[0].strIngredient}</H1>
        {ingredients[0].strAlcohol === 'Yes' ? (
          <LocalBarIcon />
        ) : (
          <FreeBreakfastIcon />
        )}
      </div>
      {ingredients[0].strDescription !== null ? (
        <div className='ingredient-detail'>
          <div className='ingredient-description-box'>
            <div className='ingredient-description'>
              {ingredients[0].strDescription}
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <h2>Currently there is no description available. Come back later!</h2>
          <SentimentVeryDissatisfiedIcon
            style={{ fontSize: '50px', marginTop: '10px' }}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default IngredientDetail;
