function Private(props) {
  return localStorage.getItem('token') !== null ? props.children : null;
}

export default Private;
