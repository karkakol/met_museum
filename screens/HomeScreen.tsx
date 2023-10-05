import AllMuseumsScreen from "./AllMuseumsScreen";
import SearchMuseumScreen from "./SearchMuseumScreen";
import FavouriteMuseumsScreen from "./FavouriteMuseumsScreen";
import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Fontisto} from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

export default function HomeScreen(){

    return (
        <Tab.Navigator>
            <Tab.Screen name="All" component={AllMuseumsScreen} options={homeIcon()}/>
            <Tab.Screen name="Search" component={SearchMuseumScreen} options={searchIcon()}/>
            <Tab.Screen name="Favourite" component={FavouriteMuseumsScreen} options={favouriteIcon()}/>
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
