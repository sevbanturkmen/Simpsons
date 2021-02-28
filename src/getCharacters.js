import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCharacters, restoreCharacters} from './Actions/character';
import Navigation from './Navigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

class GetCharacters extends Component {
  async componentDidMount() {
    const characters = await AsyncStorage.getItem('Characters');
    if (characters) {
      this.restore(JSON.parse(characters));
    } else {
      this.getCharacters();
    }
  }

  restore = async (characters) => {
    await restoreCharacters(characters);
  };

  getCharacters = async () => {
    await fetchCharacters();
  };

  render() {
    return <Navigation />;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    characters: state.characters.characters,
  };
};
export default connect(mapStateToProps, {
  fetchCharacters,
  restoreCharacters,
})(GetCharacters);
