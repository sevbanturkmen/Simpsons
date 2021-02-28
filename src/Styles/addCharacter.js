import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  headerView: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
  },
  goBack: {width: 25, height: 25},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: windowWidth / 2 - 110,
  },
  inputInfo: {
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  inputView: {marginTop: 10, paddingLeft: 5},
  input: {
    padding: 10,
    width: '98%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  addCharacterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#2E86DF',
    width: '98%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
  },
});

export default styles;
