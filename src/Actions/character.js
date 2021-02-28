import {ADD_CHARACTER, FETCH_CHARACTERS} from './types';
import axios from 'axios';
import store from '../store';

export const fetchCharacters = async () => {
  const {data} = await axios
    .get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
    .then(
      store.dispatch({
        type: FETCH_CHARACTERS,
        payload: data,
      }),
    );
};

export const addCharacter = (content) => {
  store.dispatch({
    type: ADD_CHARACTER,
    payload: {...content},
  });
};
