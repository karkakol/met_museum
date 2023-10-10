import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllMuseumsScreen from './screens/AllMuseumsScreen'
import SearchMuseumScreen from './screens/SearchMuseumScreen'
import FavouriteMuseumsScreen from './screens/FavouriteMuseumsScreen'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Fontisto } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
export default function App () {
  return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
  )
}

function MyTabs () {
  return (
        <Tab.Navigator>
            <Tab.Screen name="All" component={AllMuseumsScreen}
                        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color}/> }}
            />
            <Tab.Screen name="Search" component={SearchMuseumScreen}
                        options={{ tabBarIcon: ({ color }) => <Ionicons name="search" size={20} color={color}/> }}
            />
            <Tab.Screen name="Favourite" component={FavouriteMuseumsScreen}
                        options={{ tabBarIcon: ({ color }) => <Fontisto name="favorite" size={20} color={color}/> }}
            />
        </Tab.Navigator>
  )
}
