import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { AllCocktailsContext } from './AllCocktailsContext';
import { useContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ReactPlayer from 'react-player';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';
import { H1 } from './HomeDesign';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FavoritesContext } from './FavoritesContext';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { favoriteIconStyle } from './CocktailCardDesign';

import '../components/css/cocktailDetail.scss';

const CocktailDetail = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [language] = useContext(LanguageContext);
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const [iconValue, setIconValue] = useState(false);
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const titleRef = useRef(null);
  const ingredientList = useRef(null);
  const pic = useRef(null);
  const video = useRef(null);
  const instructions = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });
    gsap.from(pic.current, {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });

    gsap.from(ingredientList.current, {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });

    gsap.from(video.current, {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });

    gsap.from(instructions.current, {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });
  }, []);

  useEffect(() => {
    const getFavoriteNames = () => {
      let cocktailNames = [];
      if (favorites.lenght !== 0) {
        cocktailNames = favorites.map(
          (currentCocktail) => currentCocktail.strDrink
        );
        return cocktailNames;
      }
    };

    const getCardValue = (name) => {
      let favoriteNames = getFavoriteNames();
      setIconValue(favoriteNames.includes(name));
    };

    const cocktail = allCocktails.find(
      (cocktail) => cocktail.idDrink === id.toString()
    );

    setCocktail(cocktail);
    if (cocktail !== undefined) {
      getCardValue(cocktail.strDrink);
    }

    const collectIngredients = () => {
      let ingredientObjects = [];
      if (cocktail !== undefined) {
        for (let index = 1; index < 16; index++) {
          let value = cocktail[`strIngredient${index}`];
          if (value !== null && value !== '') {
            let object = { name: value, id: index };
            ingredientObjects.push(object);
          }
        }
      }
      setIngredients(ingredientObjects);
    };

    collectIngredients();
  }, [allCocktails, id, favorites]);

  if (cocktail === undefined) {
    return null;
  }

  const onClickFavorite = (e) => {
    if (iconValue === false) {
      addFavorites(e);
    } else {
      deleteFavorite(e);
    }
  };

  const addFavorites = (e) => {
    e.preventDefault();
    setIconValue(true);
    setFavorites((prevFavorites) => [
      ...prevFavorites,
      {
        strDrink: cocktail.strDrink,
        idDrink: cocktail.idDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
      },
    ]);
  };

  const deleteFavorite = (e) => {
    e.preventDefault();
    setIconValue(false);
    const updatedFavorites = favorites.filter(
      (givenCocktail) => givenCocktail.idDrink !== cocktail.idDrink
    );
    setFavorites(updatedFavorites);
  };

  return (
    <Fragment>
      <H1 ref={titleRef}>{cocktail.strDrink}</H1>
      <div className='cocktail-detail'>
        <div className='first-column'>
          <div ref={pic} className='image-container'>
            <img
              className='cocktail-pic'
              src={cocktail.strDrinkThumb}
              alt='cocktail'
            />
            <IconButton className="heart-icon"
              onClick={(e) => onClickFavorite(e)}
              name={cocktail.strDrink}
              value={cocktail.iconValue}
            >
              {iconValue ? (
                <FavoriteIcon style={favoriteIconStyle} />
              ) : (
                <FavoriteBorderOutlinedIcon style={favoriteIconStyle} />
              )}
            </IconButton>
          </div>
          <div ref={ingredientList} className='ingredients-container'>
            <h2>{dictionary.ingredient[language]}</h2>
            <div className='ingredients-box'>
              {ingredients.map((ingredient) => (
                <a href={`/ingredient/${ingredient.name}`} key={ingredient.id}>
                  <div className='ingredient'>{ingredient.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='second-column'>
          <div ref={instructions} className='instructions-container'>
            <h2>{dictionary.instructions[language]}</h2>
            {language === 'english' ? (
              <div>{cocktail.strInstructions}</div>
            ) : (
              <div>{cocktail.strInstructionsDE}</div>
            )}
          </div>
          {cocktail.strVideo !== null ? (
            <div ref={video} className='video-container'>
              <h2>{dictionary.howTo[language]}</h2>
              <ReactPlayer
                controls={true}
                url={cocktail.strVideo}
                width='360px'
                height='200px'
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CocktailDetail;
