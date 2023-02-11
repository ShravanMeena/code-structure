import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {AboutMeScreen, HomeScreen} from '../screens';

// create a new stack navigator
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AboutMe" component={AboutMeScreen} />
    </Stack.Navigator>
  );
}
