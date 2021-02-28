import React, {Component} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class CharacterDetail extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width;
    const character = this.props.navigation.getParam('character');
    console.log(character);
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View
          style={{
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'black',
          }}>
          <TouchableOpacity
            style={{left: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../Assets/back.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              left: windowWidth / 2 - 60,
            }}>
            Details
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}
          style={{
            width: '100%',
            backgroundColor: '#F2F2F2',
            flex: 1,
            padding: 50,
          }}>
          <Image
            source={{uri: character.avatar}}
            style={{width: 200, height: 200, resizeMode: 'contain'}}
          />
          <Text style={{fontSize: 30}}>{character.name}</Text>
          <Text style={{color: '#979797'}}>{character.job}</Text>
          <Text style={{width: '100%', marginTop: 20, lineHeight: 20}}>
            {character.about}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default CharacterDetail;
