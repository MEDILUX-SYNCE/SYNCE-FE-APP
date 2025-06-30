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

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="AccountSearch" component={AccountSearchScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="RecordProgress" component={RecordProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
