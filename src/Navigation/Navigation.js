import React from 'react';

// navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// screens
import AddCharacter from '../Screens/AddCharacter';
import CharacterDetail from '../Screens/CharacterDetail';
import Characters from '../Screens/Characters';

const CharacterStack = createStackNavigator(
  {
    Characters,
    AddCharacter,
    CharacterDetail,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {gestureEnabled: false},
    initialRouteName: 'Characters',
  },
);

const Navigation = createAppContainer(CharacterStack);

function AppWrapper() {
  return <Navigation />;
}

export default AppWrapper;
