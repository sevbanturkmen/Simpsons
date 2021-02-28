import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {
  fetchCharacters,
  restoreCharacters,
  deleteCharacter,
} from '../Actions/character';
import CharacterItem from '../Components/CharacterItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Styles/character';

class Characters extends Component {
  deleteCharacter = async (id) => {
    console.log(id);
    await this.props.deleteCharacter(id);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Simpsons</Text>
        </View>
        <FlatList
          data={this.props.characters}
          renderItem={({item, index}) => {
            if (item.about) {
              return (
                <CharacterItem
                  id={item.id}
                  name={item.name}
                  image={item.avatar}
                  deleteCharacter={(id) => this.deleteCharacter(id)}
                  goTo={() =>
                    this.props.navigation.navigate('CharacterDetail', {
                      character: item,
                    })
                  }
                />
              );
            }
          }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddCharacter')}
          style={styles.addCharacterButton}>
          <Text>Add Character</Text>
        </TouchableOpacity>
      </ScrollView>
    );
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
  deleteCharacter,
})(Characters);
