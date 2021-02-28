import {
  ADD_CHARACTER,
  FETCH_CHARACTERS,
  RESTORE_CHARACTERS,
  DELETE_CHARACTER,
} from './types';
import axios from 'axios';
import store from '../store';
const id = '24';
export const fetchCharacters = async () => {
  const {data} = await axios.get(
    'https://5fc9346b2af77700165ae514.mockapi.io/simpsons',
  );
  // return data;
  store.dispatch({
    type: FETCH_CHARACTERS,
    payload: data,
  });
};

export const addCharacter = (name, job, avatar, about) => {
  store.dispatch({
    type: ADD_CHARACTER,
    payload: {id, name, job, avatar, about},
  });
};

export const restoreCharacters = (content) => {
  store.dispatch({
    type: RESTORE_CHARACTERS,
    payload: content,
  });
};

export const deleteCharacter = (content) => {
  store.dispatch({
    type: DELETE_CHARACTER,
    payload: content,
  });
};
