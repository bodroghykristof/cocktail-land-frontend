import React, { useContext, useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { P, addStyle, deleteStyle, IMG, Card } from './CocktailCardDesign';
import { FavoritesContext } from './FavoritesContext';
import { IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

export const CocktailCard = props => {

    const [value, setValue] = useState(false);
    const [favorites, setFavorites ] = useContext(FavoritesContext);
    const { idDrink, strDrink, strDrinkThumb } = props.cocktail;
  
    useEffect(() => {

        const getFavoriteNames = () =>{
            let cocktailNames = [];
            if (favorites.lenght !== 0) {
                cocktailNames = favorites.map(cocktail => cocktail.strDrink);
            return cocktailNames
            }
        }

        const getCardValue = (name) => {
            let favoriteNames = getFavoriteNames();
            setValue(favoriteNames.includes(name));
        }
        getCardValue(strDrink);
    }, [favorites, strDrink]);
     

    const onClickFavorite = (e) => {
        if ( value === false  ) {
            addFavorites(e);
        } else {
            deleteFavorite(e);
        }
    }

    const addFavorites = (e) => {
        e.preventDefault();
        setValue(true);
        setFavorites(prevFavorites => [...prevFavorites, {"strDrink": strDrink, "idDrink": idDrink, "strDrinkThumb":strDrinkThumb }])
       
    }

    const deleteFavorite = (e) => {
        e.preventDefault();
        setValue(false);
        const updatedFavorites = favorites.filter(cocktail => cocktail.idDrink !== idDrink);
        setFavorites(updatedFavorites);
       
    }

    let content = ( 
        <Link to={`cocktail/${idDrink}`}>
        <Card className="card" >
            <IMG src={ strDrinkThumb }></IMG>
            <span>
                <P>{ strDrink }</P><br />
                <IconButton onClick={(e) => onClickFavorite(e)} name={strDrink} value={ value }>
                { value ? <FavoriteIcon style={ deleteStyle }/> : <FavoriteBorderOutlinedIcon style={ addStyle }/> }
                </IconButton>
            </span>
        </Card>
        </Link>
      )
    return content;
}