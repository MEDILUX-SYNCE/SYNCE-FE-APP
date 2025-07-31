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

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={withAppLayout(SplashScreen)} />
        <Stack.Screen
          name="Onboarding"
          component={withAppLayout(OnboardingScreen)}
        />
        <Stack.Screen name="Login" component={withAppLayout(LoginScreen)} />
        <Stack.Screen name="Home" component={withAppLayout(HomeScreen)} />
        <Stack.Screen
          name="Notifications"
          component={withAppLayout(NotificationsScreen)}
        />
        <Stack.Screen
          name="AccountSearch"
          component={withAppLayout(AccountSearchScreen)}
        />
        <Stack.Screen name="Signup" component={withAppLayout(SignupScreen)} />
        <Stack.Screen
          name="Record"
          component={withAppLayout(RecordProgressScreen)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
