import {ADD_CHARACTER, FETCH_CHARACTERS} from '../Actions/types';

const initialState = {
  characters: [],
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      const characters = [...state.characters, action.payload];
      console.log(characters);
      return {
        ...state,
        characters: characters,
      };
    }
    case ADD_CHARACTER: {
      const characters = [...state.characters, action.payload];
      return {
        ...state,
        characters: characters,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
