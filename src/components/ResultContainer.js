import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import ResultContainerItem from './ResultContainerItem';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';

export default function ResultContainer(props) {
  const [language] = useContext(LanguageContext);

  return (
    <Fragment>
      <ResultContainerItem
        cocktails={props.alcoholicCocktails}
        search={dictionary.name[language]}
        alcoholic={dictionary.alcoholic[language]}
      />
      <ResultContainerItem
        cocktails={props.nonAlcoholicCocktails}
        search={dictionary.name[language]}
        alcoholic={dictionary.alcoholFree[language]}
      />
      <ResultContainerItem
        cocktails={props.alcoholicIngredients}
        search={dictionary.ingredient[language]}
        alcoholic={dictionary.alcoholic[language]}
      />
      <ResultContainerItem
        cocktails={props.nonAlcoholicIngredients}
        search={dictionary.ingredient[language]}
        alcoholic={dictionary.alcoholFree[language]}
      />
    </Fragment>
  );
}

ResultContainer.propTypes = {
  alcoholicCocktails: PropTypes.array,
  nonAlcoholicCocktails: PropTypes.array,
  alcoholicIngredients: PropTypes.array,
  nonAlcoholicIngredients: PropTypes.array,
};
