import { useContext } from 'react';
import { IsLoggedInContext } from './IsLoggedInContext';

function Private(props) {
  const [isLoggedIn] = useContext(IsLoggedInContext);

  return isLoggedIn ? props.children : null;
}

export default Private;
