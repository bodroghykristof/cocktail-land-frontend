import React from "react";
import { useParams } from "react-router-dom";
import { AllCocktailsContext } from "./AllCocktailsContext";
import { useContext, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";

import "../components/css/coctailDetail.scss";

const CoctailDetail = () => {
  const [allCoctails] = useContext(AllCocktailsContext);
  const [coctail, setCoctail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();

  const titleRef = useRef(null);
  const ingredientList = useRef(null);
  const pic = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1,
      delay: 2,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });
    gsap.from(pic.current, {
      duration: 1,
      delay: 2,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });

    gsap.from(ingredientList.current, {
      duration: 1,
      delay: 2,
      y: 100,
      opacity: 0,
      scale: 0.5,
    });
  }, []);

  useEffect(() => {
    const coctail = allCoctails.find(
      (coctail) => coctail.idDrink === id.toString()
    );

    setCoctail(coctail);

    const collectIngredients = () => {
      let ingredientObjects = [];
      if (coctail !== undefined) {
        for (let index = 1; index < 16; index++) {
          for (let [key, value] of Object.entries(coctail)) {
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
  }, [allCoctails, id]);

  if (coctail === undefined) {
    return null;
  }

  return (
    <div className="coctail-detail">
      <div className="title-container">
        <h1 ref={titleRef}>{coctail.strDrink}</h1>
      </div>
      <div ref={pic} className="image-container">
        <img className="coctailPic" src={coctail.strDrinkThumb} alt="coctail" />
      </div>
      <div ref={ingredientList} className="ingredients-container">
        <table>
          <thead>
            <tr>
              <td className="table-title">Hozzávalók</td>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr>
                <td className="ingredient" key={ingredient.id}>
                  {ingredient.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="video-container">
        <ReactPlayer url={coctail.strVideo} />
      </div>
    </div>
  );
};

export default CoctailDetail;
