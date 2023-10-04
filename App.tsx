import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllMuseumsScreen from "./screens/AllMuseumsScreen";
import SearchMuseumScreen from "./screens/SearchMuseumScreen";
import FavouriteMuseumsScreen from "./screens/FavouriteMuseumsScreen";
import React from "react";

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

        <Tab.Navigator>
            <Tab.Screen name="All" component={AllMuseumsScreen}/>
            <Tab.Screen name="Search" component={SearchMuseumScreen}/>
            <Tab.Screen name="Favourite" component={FavouriteMuseumsScreen}/>
        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
