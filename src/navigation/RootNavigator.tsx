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
import PasswordScreen from '../screens/my/account/password/PasswordScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import NewPasswordScreen from '../screens/my/account/password/newpassword/NewPasswordScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import SplashScreen from '../screens/splash/SplashScreen';
import SignupScreen from '../screens/auth/SignupScreen';

// Stack 전역 네비게이션 (앱 전체에서의 흐름 관리용)
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={withAppLayout(BottomTabNavigator)} />
      <Stack.Screen name="Splash" component={withAppLayout(SplashScreen)} />
      <Stack.Screen
        name="Onboarding"
        component={withAppLayout(OnboardingScreen)}
      />
      <Stack.Screen name="Login" component={withAppLayout(LoginScreen)} />
      <Stack.Screen name="Signup" component={withAppLayout(SignupScreen)} />
      <Stack.Screen
        name="Notifications"
        component={withAppLayout(NotificationsScreen)}
      />
      <Stack.Screen
        name="Record"
        component={withAppLayout(RecordProgressScreen)}
      />
      <Stack.Screen name="Account" component={withAppLayout(AccountScreen)} />
      <Stack.Screen name="Password" component={withAppLayout(PasswordScreen)} />
      <Stack.Screen
        name="NewPassword"
        component={withAppLayout(NewPasswordScreen)}
      />
      <Stack.Screen name="Notice" component={withAppLayout(NoticeScreen)} />
      <Stack.Screen name="Alert" component={withAppLayout(AlertScreen)} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
