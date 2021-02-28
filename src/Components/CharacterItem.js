import React, {Component} from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';

export default class CharacterItem extends Component {
  deleteCharacter = (id) => {
    this.props.deleteCharacter(id);
  };

  render() {
    const {image, name, id} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.goTo()}
        style={{
          width: '100%',
          height: 80,
          borderWidth: 0.5,
          borderColor: 'gray',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Image
          source={{uri: image}}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
          }}
        />
        <Text>{name}</Text>
        <TouchableOpacity onPress={() => this.deleteCharacter(id)}>
          <Image
            source={require('../Assets/trash.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
    Text;
  }
}
