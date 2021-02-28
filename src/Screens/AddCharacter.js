import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {addCharacter} from '../Actions/character';
import styles from '../Styles/addCharacter';

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

  AddCharacter = async () => {
    const {name, job, avatar, about} = this.state;
    if (name !== '' && job !== '' && avatar !== '' && about !== '') {
      await addCharacter(name, job, avatar, about);
      this.props.navigation.navigate('Characters');
    } else {
      alert('Please fill all inputs');
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={{left: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../Assets/back.jpg')}
              style={styles.goBack}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Add New Character</Text>
        </View>
        <View>
          <View style={styles.inputView}>
            <Text style={styles.inputInfo}>Name Surname:</Text>
            <TextInput
              onChangeText={(e) => this.setState({name: e})}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputInfo}>Job Title:</Text>
            <TextInput
              onChangeText={(e) => this.setState({job: e})}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputInfo}>About Him/Her:</Text>
            <TextInput
              onChangeText={(e) => this.setState({about: e})}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputInfo}>Image Link:</Text>
            <TextInput
              onChangeText={(e) => this.setState({avatar: e})}
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.AddCharacter()}
            style={styles.addCharacterButton}>
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
