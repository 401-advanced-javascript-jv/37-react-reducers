export default (state = {}, {type, payload}) => {
  switch (type) {
  case 'BOX_CREATE':
  case 'BOX_DELETE':
  case 'CAT_CREATE':
    return [...state, payload];
  case 'CAT_UPDATE':
    return [...state];
  case 'CAT_DELETE':
    return [...state];
  default:
    return state;
  }
}
