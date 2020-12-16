import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
import DynamicScroller from './scrolling/DynamicScroller';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';

export default function ResultContainerItem({ cocktails, search, alcoholic }) {
  const [language] = useContext(LanguageContext);

  return (
    <Fragment>
      {cocktails.length > 0 ? (
        <Fragment>
          <h3>
            {alcoholic} {dictionary.searchHeaderMiddle[language]} {search}
          </h3>
          <DynamicScroller>
            {cocktails.map((cocktail) => (
              <Link
                to={`cocktail/${cocktail.idDrink}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <SearchCard data={cocktail} />
              </Link>
            ))}
          </DynamicScroller>
        </Fragment>
      ) : (
        ``
      )}
    </Fragment>
  );
}
