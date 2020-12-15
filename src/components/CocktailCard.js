import React from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Div, P, Button, IMG, Card, Span } from './CocktailCardDesign';

export const CocktailCard = props => {

    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

   const addFavorites = () => {
       
   }

    let content = ( 
        <Link to={`cocktail/${idDrink}`}>
        <Card className="card" >
            <IMG src={ strDrinkThumb }></IMG>
            <Span>
                <P>{ strDrink }</P><br />
                <Button onClick={addFavorites}>Add Favorites</Button>
            </Span>
        </Card>
        </Link>
      )
    
    return content;
}