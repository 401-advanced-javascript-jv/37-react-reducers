const defaultState = [{ id: 1, name: 'A1' }, { id: 2, name: 'B1' }];
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'BOX_CREATE':
      return [...state, payload];
    case 'BOX_UPDATE':
      return state.map((box) =>
        box.id === payload.id ? payload : box
      );
    case 'BOX_DELETE':
      return state.filter((box) => box.id !== payload.id);
    default:
      return state;
  }
};
