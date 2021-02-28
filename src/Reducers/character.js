import {
  ADD_CHARACTER,
  FETCH_CHARACTERS,
  RESTORE_CHARACTERS,
  DELETE_CHARACTER,
} from '../Actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  characters: [],
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      const characters = action.payload;
      return {
        ...state,
        characters: characters,
      };
    }
    case ADD_CHARACTER: {
      const characters = [...state.characters, action.payload];
      AsyncStorage.setItem('Characters', JSON.stringify(characters));
      return {
        ...state,
        characters: characters,
      };
    }
    case RESTORE_CHARACTERS: {
      return {characters: action.payload};
    }
    case DELETE_CHARACTER: {
      const index = state.characters.findIndex(
        (character) => character.id === action.payload,
      );
      let newCharacters = [...state.characters];
      if (index >= 0) {
        newCharacters.splice(index, 1);
      } else {
        console.warn(action.payload);
      }
      AsyncStorage.setItem('Characters', JSON.stringify(newCharacters));
      return {...state, characters: newCharacters};
    }
    default:
      return {
        ...state,
      };
  }
}
