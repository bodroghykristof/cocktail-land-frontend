import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../components/css/header.scss';
import Toggle from '../language/Toggle';
import germany from '../../static/germany.png';
import uk from '../../static/united-kingdom.png';
import { LanguageContext } from '../language/LanguageContext';
import dictionary from '../language/Dictionary';

export default function Header() {
  const [language] = useContext(LanguageContext);

  return (
    <div className='header'>
      <div className='header-left-container'>
        <Link className='home-link' to='/home'>
          Home
        </Link>
        <img src={uk} alt='uk flag'></img>
        <Toggle />
        <img src={germany} alt='german flag'></img>
      </div>

      <div className='header-middle-container'>
        <h3>{dictionary.headerTitle[language]}</h3>
      </div>

      <div className='header-right-container'>
        <div className='link-container'>
          <Link className='link' to='/search-cocktails'>
            {dictionary.search[language]}
          </Link>
          <Link className='link' to='/favorite-cocktails'>
            {dictionary.favourites[language]}
          </Link>
          <Link className='link' to='#'>
            {dictionary.about[language]}
          </Link>
        </div>
      </div>
    </div>
  );
}
