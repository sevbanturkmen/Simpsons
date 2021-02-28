import {combineReducers} from 'redux';
import characterReducer from './character';

// reducers

export default combineReducers({
  characters: characterReducer,
});
