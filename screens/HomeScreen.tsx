import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

import { getAppColors } from "../utils/colors";
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
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchMuseumScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteMuseumsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="favorite" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
