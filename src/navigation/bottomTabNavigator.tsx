/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordScreen from '../screens/record/RecordScreen';
import ArticleScreen from '../screens/article/ArticleScreen';
import MyScreen from '../screens/my/MyScreen';
import { Image } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/selectedHome.png')}
              />
            ) : (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/unselectedHome.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="기록"
        component={RecordScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/selectedRecord.png')}
              />
            ) : (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/unselectedRecord.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="아티클"
        component={ArticleScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/selectedArticle.png')}
              />
            ) : (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/unselectedArticle.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="내정보"
        component={MyScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/selectedMy.png')}
              />
            ) : (
              <Image
                style={{ width: 32, height: 32 }}
                source={require('../assets/images/bottom/unselectedMy.png')}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
