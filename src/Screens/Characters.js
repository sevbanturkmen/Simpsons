import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {fetchCharacters} from '../Actions/character';
import CharacterItem from '../Components/CharacterItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    this.getCharacters();
  }

  deleteCharacter = () => {
    console.log('sevban');
  };

  getCharacters = async () => {
    await fetchCharacters().catch((err) => console.log(err));
    // this.setState({characters: characters});
  };

  render() {
    const {characters} = this.props;
    console.log(characters);
    return (
      <ScrollView>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: 'black',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Simpsons</Text>
        </View>
        <FlatList
          data={characters}
          renderItem={({item, index}) => {
            if (item.about) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('CharacterDetail', {
                      character: item,
                    })
                  }>
                  <CharacterItem
                    name={item.name}
                    image={item.avatar}
                    // onPress={()=>this.deleteCharacter()}
                  />
                </TouchableOpacity>
              );
            }
          }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddCharacter')}
          style={{
            marginTop: 20,
            width: '80%',
            height: 50,
            borderRadius: 30,
            backgroundColor: 'lightblue',
            alignSelf: 'center',
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
export default connect(mapStateToProps, {fetchCharacters})(Characters);
