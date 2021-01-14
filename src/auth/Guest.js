import { useContext } from 'react';
import { IsLoggedInContext } from './IsLoggedInContext';

function Guest(props) {
  const [isLoggedIn] = useContext(IsLoggedInContext);

  return !isLoggedIn ? props.children : null;
}

export default Guest;
