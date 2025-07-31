/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordScreen from '../screens/record/RecordScreen';
import ArticleScreen from '../screens/article/ArticleScreen';
import MyScreen from '../screens/my/MyScreen';
import { Image } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import { colors } from '../theme/color';
import { fontSizes } from '../theme/fontSizes';

// 탭 이름들을 정의해주는 타입
export type BottomTabParamList = {
  홈: undefined;
  기록: undefined;
  아티클: undefined;
  내정보: undefined;
};

// 타입을 BottomTabNavigator 에 연결
const Tab = createBottomTabNavigator<BottomTabParamList>();

// BottomTabNavigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary1,
        tabBarInactiveTintColor: colors.gray3,
        tabBarLabelStyle: {
          fontSize: fontSizes.sm,
          fontWeight: 'medium',
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: false, // 상단 헤더 제거
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
