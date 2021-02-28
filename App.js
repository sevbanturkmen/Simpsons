import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation/Navigation';
import store from './src/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
