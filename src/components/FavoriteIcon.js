import React, { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { IconButton } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { favoriteIconStyle } from './CocktailCardDesign';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function MyFavoriteIcon(props) {

  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [value, setValue] = useState(props.value);
  const cocktail = props.cocktail;

  useEffect(() => {
    const getCardValue = (cocktailName) => {
      if ( props.value !== undefined) {
        setValue(value);
      } else {
        setValue(favorites.map(favorite => favorite.strDrink).includes(cocktailName));
      }
    };

    getCardValue(cocktail.strDrink);
  }, [favorites, cocktail.strDrink]);


  const onClickHeart = (e) => {
    if (value === false) {
      addFavorites(e);
    } else {
      deleteFavorite(e);
    }
  };

  const addFavorites = (e) => {
    e.preventDefault();
    setFavorites((prevFavorites) => [
      ...prevFavorites,
      {
        strDrink: cocktail.strDrink,
        idDrink: cocktail.idDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
      },
    ]);
    setValue(true);
  };

  const deleteFavorite = (e) => {
    e.preventDefault();
    setValue(false);
    const updatedFavorites = favorites.filter(
      (favCocktail) => favCocktail.idDrink !== cocktail.idDrink
    );
    setFavorites(updatedFavorites);
  };
  
  return (
    <IconButton 
      onClick={(e) => {onClickHeart(e);}}
      name={cocktail.strDrink}
      value={value}
    > {value ? (
        <FavoriteIcon style={favoriteIconStyle}/>
      ) : (
        <FavoriteBorderOutlinedIcon style={favoriteIconStyle}/>
      )}
    </IconButton>
  );
}