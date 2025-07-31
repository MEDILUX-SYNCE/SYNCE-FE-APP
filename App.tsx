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
<<<<<<< HEAD
import { PaperProvider } from 'react-native-paper';
import { customTheme } from './src/theme/customTheme';
import HospitalSearchScreen from './src/screens/record/HospitalSearchScreen';
=======
import { withAppLayout } from './src/components/layouts/withAppLayout';
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="AccountSearch" component={AccountSearchScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen
            name="RecordProgress"
            component={RecordProgressScreen}
          />
          <Stack.Screen
            name="HospitalSearch"
            component={HospitalSearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
=======
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
>>>>>>> d3254a77198e42a0d443a4bdde403613add69825
  );
}
