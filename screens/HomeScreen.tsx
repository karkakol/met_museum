import AllMuseumsScreen from "./AllMuseumsScreen";
import SearchMuseumScreen from "./SearchMuseumScreen";
import FavouriteMuseumsScreen from "./FavouriteMuseumsScreen";
import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Fontisto} from "@expo/vector-icons";
import SettingsScreen from "./settings/SettingsScreen";
import {StyleSheet} from 'react-native';
import useAppColorScheme from "../hooks/useAppColorScheme";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    const colorScheme = useAppColorScheme();

    return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarStyle: colorScheme.light ? styles.tabBarLightStyle : styles.tabBarDarkStyle,
            headerStyle: colorScheme.light ? styles.tabBarLightStyle : styles.tabBarDarkStyle,
            headerTintColor: colorScheme.light ? "black" : "white",
        })}>
            <Tab.Screen name="All" component={AllMuseumsScreen} options={homeIcon()}/>
            <Tab.Screen name="Search" component={SearchMuseumScreen} options={searchIcon()}/>
            <Tab.Screen name="Favourite" component={FavouriteMuseumsScreen} options={favouriteIcon()}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={settingsIcon()}/>
        </Tab.Navigator>
    )
}

const homeIcon = (): BottomTabNavigationOptions => {
    return {
        tabBarIcon: props => <Ionicons name="home" size={20} color={props.color}/>
    }
}

const searchIcon = (): BottomTabNavigationOptions => {
    return {
        tabBarIcon: props => <Ionicons name="search" size={20} color={props.color}/>
    }
}

const favouriteIcon = (): BottomTabNavigationOptions => {
    return {
        tabBarIcon: props => <Fontisto name="favorite" size={20} color={props.color}/>
    }
}

const settingsIcon = (): BottomTabNavigationOptions => {
    return {
        tabBarIcon: props => <Ionicons name="settings" size={24} color={props.color}/>
    }
}

const styles = StyleSheet.create({
    tabBarLightStyle: {
        backgroundColor: "white",
    },
    tabBarDarkStyle: {
        backgroundColor: "black",
    }
});
