import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Private from '../../auth/Private';
import '../../components/css/header.scss';
import Toggle from '../language/Toggle';
import germany from '../../static/germany.png';
import uk from '../../static/united-kingdom.png';
import { LanguageContext } from '../language/LanguageContext';
import dictionary from '../language/Dictionary';
import logo from '../../static/logo.png';

export default function Header() {
  const [language] = useContext(LanguageContext);

  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <h1 className='header-title'>Drink !T</h1>
      <div className='nav'>
        <Link className='home-link' to='/home'>
          Home
        </Link>

        <Link className='link' to='/search-cocktails'>
          {dictionary.search[language]}
        </Link>
        <Private>
          <Link className='link' to='/favorite-cocktails'>
            {dictionary.favourites[language]}
          </Link>
        </Private>
        <Link className='link' to='#'>
          {dictionary.about[language]}
        </Link>
      </div>
      <div className='language'>
        <img src={uk} alt='uk flag'></img>
        <Toggle />
        <img src={germany} alt='german flag'></img>
      </div>
    </div>
  );
}
