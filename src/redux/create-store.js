import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import mainReducer from './main-reducer.js';

export default () => {
  return createStore(mainReducer, composeWithDevTools());
}
