import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import NotificationsScreen from '../screens/home/NotificationsScreen';
import { RootStackParamList } from './RootStackParamList';
import { withAppLayout } from '../components/layouts/withAppLayout';
import RecordProgressScreen from '../screens/record/RecordProgressScreen';

// Stack 전역 네비게이션 (앱 전체에서의 흐름 관리용)
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={withAppLayout(BottomTabNavigator)} />
      <Stack.Screen
        name="Notifications"
        component={withAppLayout(NotificationsScreen)}
      />
      <Stack.Screen
        name="Record"
        component={withAppLayout(RecordProgressScreen)}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
