import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
import DynamicScroller from './scrolling/DynamicScroller';
import { LanguageContext } from './language/LanguageContext';
import dictionary from './language/Dictionary';
import SearchTitle from "../elements/SearchTitle";

export default function ResultContainerItem({ cocktails, search, alcoholic }) {
  const [language] = useContext(LanguageContext);

  return (
    <Fragment>
      {cocktails.length > 0 ? (
        <Fragment>
            {cocktails.length > 0 ? (
                <Fragment>
                    <SearchTitle>{alcoholic} {dictionary.searchHeaderMiddle[language]} {search}</SearchTitle>
                    <DynamicScroller>
                        {cocktails.map((cocktail) => (
                            <Link
                                key={cocktail.idDrink}
                                to={`cocktail/${cocktail.idDrink}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
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
      ) : (
        ``
      )}
    </Fragment>
  );
}
