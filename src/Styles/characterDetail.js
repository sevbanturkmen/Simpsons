import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    left: windowWidth / 2 - 60,
  },
  Body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
    flex: 1,
    padding: 50,
  },
  avatar: {width: 200, height: 200, resizeMode: 'contain'},
  about: {width: '100%', marginTop: 20, lineHeight: 20, marginBottom: 100},
});

export default styles;
