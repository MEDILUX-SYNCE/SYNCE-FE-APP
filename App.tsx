import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import { enableScreens } from 'react-native-screens';
import LoginScreen from './src/screens/auth/LoginScreen';
import SplashScreen from './src/screens/onboarding/SplashScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import AccountSearchScreen from './src/screens/auth/AccountSearchScreen';
import RecordProgressScreen from './src/screens/record/RecordProgressScreen';
import NotificationsScreen from './src/screens/home/NotificationsScreen';
import { withAppLayout } from './src/components/layouts/withAppLayout';
import RootNavigator from './src/navigation/RootNavigator';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <Stack.Screen
        name="Notifications"
        component={withAppLayout(NotificationsScreen)}
      />
    </NavigationContainer>
  );
}
