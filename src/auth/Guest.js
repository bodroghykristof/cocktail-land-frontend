function Guest(props) {
  return localStorage.getItem('token') === null ? props.children : null;
}

export default Guest;
