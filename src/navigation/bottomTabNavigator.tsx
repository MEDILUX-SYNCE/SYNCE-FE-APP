import React from "react";
import { colors } from "@/theme/color";
import HomeScreen from "@/screens/home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RecordScreen from "@/screens/record/RecordScreen";
import ArticleScreen from "@/screens/article/ArticleScreen";
import MyScreen from "@/screens/my/MyScreen";
import UnselectedHomeIcon from "@/assets/images/bottom/unselected-home.svg";
import SelectedHomeIcon from "@/assets/images/bottom/selected-home.svg";
import UnselectedRecordIcon from "@/assets/images/bottom/unselected-record.svg";
import SelectedRecordIcon from "@/assets/images/bottom/selected-record.svg";
import UnselectedArticleIcon from "@/assets/images/bottom/unselected-article.svg";
import SelectedArticleIcon from "@/assets/images/bottom/selected-article.svg";
import UnselectedMyIcon from "@/assets/images/bottom/unselected-my.svg";
import SelectedMyIcon from "@/assets/images/bottom/selected-my.svg";

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 64,
          elevation: 8,
          backgroundColor: colors.white,
          shadowColor: colors.primary3,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, string> = {
            홈: "home",
            기록: "record",
            아티클: "article",
            내정보: "my",
          };
          return <Icon name={icons[route.name]} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.primary1,
        tabBarInactiveTintColor: colors.grey3,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SelectedHomeIcon width={32} height={32} />
            ) : (
              <UnselectedHomeIcon width={32} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="기록"
        component={RecordScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SelectedRecordIcon width={32} height={32} />
            ) : (
              <UnselectedRecordIcon width={32} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="아티클"
        component={ArticleScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SelectedArticleIcon width={32} height={32} />
            ) : (
              <UnselectedArticleIcon width={32} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="내정보"
        component={MyScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SelectedMyIcon width={32} height={32} />
            ) : (
              <UnselectedMyIcon width={32} height={32} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabNavigator;
