import uuid from 'uuid/v4';
import faker from 'faker';
const defaultState = {
  1: { id: 1, name: 'Calvin', box: 10 },
  2: { id: 2, name: 'Madeline', box: 20 },
};
for (let i = 0; i < 5; i++) {
  const id = uuid();
  const name = faker.name.firstName();
  const box = (Math.round(Math.random()) + 1) * 10;
  defaultState[id] = { id, name, box };
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'BOX_CREATE':
    case 'BOX_DELETE':
    case 'CAT_CREATE':
      return {...state, payload};
    case 'CAT_UPDATE':

      return {...state};
    case 'CAT_DELETE':
      return {...state};
    default:
      return state;
  }
};
