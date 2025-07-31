/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordScreen from '../screens/record/RecordScreen';
import ArticleScreen from '../screens/article/ArticleScreen';
import MyScreen from '../screens/my/MyScreen';
import { Dimensions, Image } from 'react-native';
import HomeScreen, { BottomTabParamList } from '../screens/home/HomeScreen';
import { colors } from '../theme/color';
import { fontSizes } from '../theme/fontSizes';

// 반응형 높이
const height = Dimensions.get('window').height;
const responsiveHeight = height * 0.13;

// 타입을 BottomTabNavigator 에 연결
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: responsiveHeight,
          backgroundColor: colors.white,
          borderWidth: 1,
          borderColor: colors.redwhite3,
          borderRadius: 16,
          shadowColor: '#FFE2E7',
          shadowOpacity: 24,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 10,
        },
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
