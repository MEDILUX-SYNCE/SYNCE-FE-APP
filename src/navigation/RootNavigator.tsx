import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import NotificationsScreen from '../screens/home/NotificationsScreen';
import { RootStackParamList } from './RootStackParamList';
import { withAppLayout } from '../components/layouts/withAppLayout';
import RecordProgressScreen from '../screens/record/RecordProgressScreen';
import AccountScreen from '../screens/my/account/AccountScreen';
import NoticeScreen from '../screens/my/notice/NoticeScreen';
import AlertScreen from '../screens/my/alert/AlertScreen';

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
      <Stack.Screen name="Account" component={withAppLayout(AccountScreen)} />
      <Stack.Screen name="Notice" component={withAppLayout(NoticeScreen)} />
      <Stack.Screen name="Alert" component={withAppLayout(AlertScreen)} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
