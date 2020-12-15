import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { P, Button, IMG, Card } from './CocktailCardDesign';
import { FavoritesContext } from './FavoritesContext';

export const CocktailCard = props => {

    const [favorites, setFavorites] = useContext(FavoritesContext);
    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;
   

    const getFavoriteNames = () =>{
        if (favorites.lenght !== 0) {
            let cocktailNames = favorites.map(cocktail => cocktail.strDrink);
        return cocktailNames
        }
    }

    const onClickFavorite = (e) => {
        if ( e.target.value === "true" ) {
            addFavorites(e);
        } else {
            deleteFavorite(e);
        }
    }

    const addFavorites = (e) => {
        e.preventDefault();
        let bools = favorites.map(res => res.strDrink === e.target.name);
        e.target.value = "false";
        if ((!(bools.includes(true)))) {
            setFavorites(prevFavorites => [...prevFavorites, {"strDrink": strDrink, "idDrink": idDrink, "strDrinkThumb":strDrinkThumb }])
        }  
    }

    const deleteFavorite = (e) => {
        e.preventDefault();
        e.target.value = "true";
        const updatedFavorites = favorites.filter(cocktail => cocktail.idDrink !== idDrink);
        setFavorites(updatedFavorites);
    }

    const favoriteNames = getFavoriteNames();    

    let content = ( 
        <Link to={`cocktail/${idDrink}`}>
        <Card className="card" >
            <IMG src={ strDrinkThumb }></IMG>
            <span>
                <P>{ strDrink }</P><br />
                <Button onClick={onClickFavorite} name={strDrink} value={favoriteNames.includes(strDrink) ? "false" : "true"} >{favoriteNames.includes(strDrink) ? "Delete" : "Add"}</Button>
            </span>
        </Card>
        </Link>
      )
    return content;
}