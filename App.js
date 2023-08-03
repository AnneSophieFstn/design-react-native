// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matchs from './src/screens/Matchs';
import Evenements from './src/screens/Evenements';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Matchs" component={Matchs} />
        <Tab.Screen name="Evenements" component={Evenements} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;