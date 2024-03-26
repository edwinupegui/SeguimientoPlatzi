import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/Account';

const Stack = createStackNavigator()

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{ title: "Account" }} />
    </Stack.Navigator>
  )
}