import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Touchable,
} from 'react-native';
import {connect} from 'react-redux';
import {addCharacter} from '../Actions/character';

class AddCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      avatar: '',
      about: '',
    };
  }

  AddCharacter = () => {
    const {name, job, avatar, about} = this.state;
    addCharacter(name, job, avatar, about);
  };

  render() {
    const windowWidth = Dimensions.get('window').width;
    return (
      <View style={{flex: 1}}>
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
              left: windowWidth / 2 - 110,
            }}>
            Add New Character
          </Text>
        </View>
        <View>
          <View style={{marginTop: 10, paddingLeft: 5}}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Name Surname:
            </Text>
            <TextInput
              onChangeText={(e) => this.setState({name: e})}
              style={{
                padding: 10,
                width: '98%',
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: 10, paddingLeft: 5}}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Job Title:
            </Text>
            <TextInput
              onChangeText={(e) => this.setState({job: e})}
              style={{
                padding: 10,
                width: '98%',
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: 10, paddingLeft: 5}}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: 'black',
                fontWeight: 'bold',
              }}>
              About Him/Her:
            </Text>
            <TextInput
              onChangeText={(e) => this.setState({about: e})}
              style={{
                padding: 10,
                width: '98%',
                height: 100,
                borderRadius: 10,
                borderWidth: 0.5,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: 10, paddingLeft: 5}}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Image Link:
            </Text>
            <TextInput
              onChangeText={(e) => this.setState({avatar: e})}
              style={{
                padding: 10,
                width: '98%',
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.AddCharacter()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: '#2E86DF',
              width: '98%',
              height: 50,
              marginTop: 20,
              borderRadius: 20,
            }}>
            <Text style={{color: 'white'}}>Add Character</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    characters: state.characters.characters,
  };
};
export default connect(mapStateToProps, {addCharacter})(AddCharacter);
