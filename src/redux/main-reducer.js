import { combineReducers } from 'redux';
import cats from 'cat-reducer.js';
import boxes from 'box-reducer.js';

export default combineReducers({
  cats,
  boxes,
});
