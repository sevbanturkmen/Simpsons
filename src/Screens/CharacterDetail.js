import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Styles/characterDetail';

class CharacterDetail extends Component {
  render() {
    const character = this.props.navigation.getParam('character');
    console.log(character);
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={{left: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../Assets/back.jpg')}
              style={styles.goBack}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Details</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}
          style={styles.Body}>
          <Image source={{uri: character.avatar}} style={styles.avatar} />
          <Text style={{fontSize: 30}}>{character.name}</Text>
          <Text style={{color: '#979797'}}>{character.job}</Text>
          <Text style={styles.about}>{character.about}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default CharacterDetail;
