import React, {Component} from 'react';
import {Provider} from 'react-redux';
import GetCharacters from './src/getCharacters';
import store from './src/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GetCharacters />
      </Provider>
    );
  }
}
export default App;
