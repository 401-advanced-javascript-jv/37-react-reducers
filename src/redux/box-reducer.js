export default (state = [], {type, payload}) => {
  switch (type) {
  case 'BOX_CREATE':
    return [...state, payload];
  case 'BOX_UPDATE':
    return [...state];
  case 'BOX_DELETE':
    return [...state];
  default:
    return state;
  }
}
