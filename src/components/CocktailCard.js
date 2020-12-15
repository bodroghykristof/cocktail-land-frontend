import React from 'react';
import { Link, Redirect } from "react-router-dom";
import "../../components/css/cocktailCard.scss";

export const CocktailCard = props => {

    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;

   const toDetailPage = () => {
       
   }

    let content = ( 
        <div className="card" onClick={toDetailPage}>
            <img src={strDrinkThumb}></img>
            <p>{ strDrink }</p><br />
            <button onClick={addFavorites}>Add Favorites</button>
        </div>
      )
    
    return content;
}