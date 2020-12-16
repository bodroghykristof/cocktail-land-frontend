import React from 'react';
import { useParams } from 'react-router-dom';
import { AllCocktailsContext } from './AllCocktailsContext';
import { useContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ReactPlayer from 'react-player';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';

import '../components/css/cocktailDetail.scss';

const CocktailDetail = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [language] = useContext(LanguageContext);
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();

  const titleRef = useRef(null);
  const ingredientList = useRef(null);
  const pic = useRef(null);
  const video = useRef(null);

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
  }, []);

  useEffect(() => {
    const cocktail = allCocktails.find(
      (cocktail) => cocktail.idDrink === id.toString()
    );

    setCocktail(cocktail);

    const collectIngredients = () => {
      let ingredientObjects = [];
      if (cocktail !== undefined) {
        for (let index = 1; index < 16; index++) {
          for (let [key, value] of Object.entries(cocktail)) {
            if (key.toString() === `strIngredient${index}` && value !== null) {
              let object = { name: value, id: index };
              ingredientObjects.push(object);
            }
          }
        }
      }
      setIngredients(ingredientObjects);
    };

    collectIngredients();
  }, [allCocktails, id]);

  if (cocktail === undefined) {
    return null;
  }

  return (
    <div className='cocktail-detail'>
      <div className='title-container'>
        <h1 ref={titleRef}>{cocktail.strDrink}</h1>
      </div>
      <div ref={pic} className='image-container'>
        <img
          className='cocktailPic'
          src={cocktail.strDrinkThumb}
          alt='cocktail'
        />
      </div>
      <div ref={ingredientList} className='ingredients-container'>
        <table>
          <thead>
            <tr>
              <td className='table-title'>{dictionary.ingredient[language]}</td>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr>
                <td className='ingredient' key={ingredient.id}>
                  {ingredient.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cocktail.strVideo !== null ? <div ref={video} className="video-container">
        <ReactPlayer controls={true} url={cocktail.strVideo} />
      </div> : ""}
    </div>
  );
};

export default CocktailDetail;
