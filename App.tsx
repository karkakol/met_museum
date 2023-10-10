import {
  NavigationContainer,
  type NavigationProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, useColorScheme } from "react-native";

import { FavouritesProvider } from "./providers/FavouritesProvider";
import HomeScreen from "./screens/HomeScreen";
import DetailedMuseumScreen from "./screens/DetailedMuseumScreen";
import type Museum from "./model/Museum";
import { Colors } from "./colors";

export type MainRootStackParamList = {
  Home: undefined;
  DetailedMuseum: { museum: Museum };
};

export type MainStackNavigation = NavigationProp<MainRootStackParamList>;

const Stack = createNativeStackNavigator<MainRootStackParamList>();

export default function App() {
  return (
    <FavouritesProvider>
      <MainNavigator />
    </FavouritesProvider>
  );
}

function MainNavigator() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          tabBarStyle:
            colorScheme === "light"
              ? styles.tabBarLightStyle
              : styles.tabBarDarkStyle,
          headerStyle:
            colorScheme === "light"
              ? styles.tabBarLightStyle
              : styles.tabBarDarkStyle,
          headerTintColor:
            colorScheme === "light" ? Colors.lightHeader : Colors.darkHeader,
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedMuseum"
          component={DetailedMuseumScreen}
          options={({ route }) => ({ title: route.params.museum.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarLightStyle: {
    backgroundColor: Colors.lightBackground,
  },
  tabBarDarkStyle: {
    backgroundColor: Colors.darkBackground,
  },
});
