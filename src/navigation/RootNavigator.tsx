import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={bottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
