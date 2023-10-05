import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllMuseumsScreen from "./screens/AllMuseumsScreen";
import SearchMuseumScreen from "./screens/SearchMuseumScreen";
import FavouriteMuseumsScreen from "./screens/FavouriteMuseumsScreen";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import {FavouritesProvider} from "./context/FavouriteContext";

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}

function MyTabs() {
    return (
        <FavouritesProvider>
            <Tab.Navigator>
                <Tab.Screen name="All" component={AllMuseumsScreen} options={homeIcon()}/>
                <Tab.Screen name="Search" component={SearchMuseumScreen} options={searchIcon()}/>
                <Tab.Screen name="Favourite" component={FavouriteMuseumsScreen} options={favouriteIcon()}/>
            </Tab.Navigator>
        </FavouritesProvider>


    );
}


const homeIcon = () :  BottomTabNavigationOptions=>{
    return {
        tabBarIcon: props => <Ionicons name="home" size={20} color={props.color} />
    }
}

const searchIcon = () :  BottomTabNavigationOptions=>{
    return {
        tabBarIcon: props => <Ionicons name="search" size={20} color={props.color} />
    }
}

const favouriteIcon = () :  BottomTabNavigationOptions=>{
    return {
        tabBarIcon: props => <Fontisto name="favorite" size={20} color={props.color} />
    }
}