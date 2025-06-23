import React from "react";
import HomeScreen from "@/screens/home/HomeScreen";
import SplashScreen from "@/screens/auth/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import bottomTabNavigator from "./bottomTabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={bottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
