import uuid from 'uuid/v4';
import faker from 'faker';
const defaultState = {
  1: [{ id: 1, name: 'Calvin', boxId: 1 }],
  2: [
    { id: 2, name: 'Madeline', boxId: 2 },
    { id: 3, name: 'NOT A CAT', boxId: 2 },
  ],
};
for (let i = 0; i < 5; i++) {
  const id = uuid();
  const name = faker.name.firstName();
  const boxId = Math.round(Math.random()) + 1;
  defaultState[boxId].push({ id, name, boxId });
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'BOX_CREATE': // Here, payload is an object with an id and a name
      return { ...state, [payload.id]: [] };
    case 'BOX_DELETE': {
      // Here, payload is an object with an id (at least)
      const { id } = payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case 'CAT_CREATE': {
      // Here, payload is an object with a name and a box (optionally)
      const id = uuid();
      const { name } = payload;
      const boxId = payload.boxId
        ? payload.boxId
        : (Math.round(Math.random()) + 1) * 10;
      const newCat = { id, name, boxId };
      const newState = { ...state };
      newState[boxId].push(newCat);
      return newState;
    }
    case 'CAT_UPDATE': {
      // TODO: Make this work. It doesn't.
      // Here, payload is an object with an id, a name, and a new(?) boxId
      const { id, boxId } = payload;
      const cats = [...state[boxId]];
      const updatedCats = cats.map(cat => cat.id === id ? payload : cat);
      const newState = { ...state };
      console.log({updatedCats});
      newState[boxId] = updatedCats;
      return newState;
      // newState[boxId] = newState[boxId].map((cat) =>
      //   cat.id === id ? payload : cat
      // );
    }
    case 'CAT_DELETE': {
      const { id } = payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};
