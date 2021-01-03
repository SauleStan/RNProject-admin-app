import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BrowseScreen from './src/screens/BrowseScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AddScreen from './src/screens/AddScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#222130',
          inactiveBackgroundColor: '#222831',
        }}
      >
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

