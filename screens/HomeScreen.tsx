import React from "react";
import {
  type BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

import { Colors, getAppColors } from "../utils/colors";
import { getAppStyles } from "../utils/styles";

import SettingsScreen from "./settings/SettingsScreen";
import FavouriteMuseumsScreen from "./FavouriteMuseumsScreen";
import SearchMuseumScreen from "./SearchMuseumScreen";
import AllMuseumsScreen from "./AllMuseumsScreen";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const { backgroundStyle } = getAppStyles(colorScheme);
  const { headerColor } = getAppColors(colorScheme);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: backgroundStyle,
        headerStyle: backgroundStyle,
        headerTintColor: headerColor,
      })}
    >
      <Tab.Screen
        name="All"
        component={AllMuseumsScreen}
        options={homeIcon()}
      />
      <Tab.Screen
        name="Search"
        component={SearchMuseumScreen}
        options={searchIcon()}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteMuseumsScreen}
        options={favouriteIcon()}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={settingsIcon()}
      />
    </Tab.Navigator>
  );
}

const homeIcon = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: (props) => (
      <Ionicons name="home" size={20} color={props.color} />
    ),
  };
};

const searchIcon = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: (props) => (
      <Ionicons name="search" size={20} color={props.color} />
    ),
  };
};

const favouriteIcon = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: (props) => (
      <Fontisto name="favorite" size={20} color={props.color} />
    ),
  };
};

const settingsIcon = (): BottomTabNavigationOptions => {
  return {
    tabBarIcon: (props) => (
      <Ionicons name="settings" size={24} color={props.color} />
    ),
  };
};
