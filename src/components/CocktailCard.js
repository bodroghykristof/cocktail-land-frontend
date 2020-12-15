import React from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Div, P, Button, IMG, Card, Span } from './CocktailCardDesign';

export const CocktailCard = props => {

    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

   const toDetailPage = () => {
       
   }

   const addFavorites = () => {
       
   }

    let content = ( 
        <Card className="card" onClick={toDetailPage}>
            <IMG src={ strDrinkThumb }></IMG>
            <Span>
                <P>{ strDrink }</P><br />
                <Button onClick={addFavorites}>Add Favorites</Button>
            </Span>
        </Card>
      )
    
    return content;
}