import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {FavouritesProvider} from "./providers/FavouritesProvider";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailedMuseumScreen from "./screens/DetailedMuseumScreen";
import Museum from "./model/Museum";
import {StyleSheet, useColorScheme} from "react-native";


export type MainRootStackParamList = {
    "Home": undefined,
    "DetailedMuseum": {museum: Museum}
}

export type MainStackNavigation = NavigationProp<MainRootStackParamList>;

const Stack = createNativeStackNavigator<MainRootStackParamList>();

export default function App() {
    return (
        <FavouritesProvider>
            <MainNavigator/>
        </FavouritesProvider>
    );
}

function MainNavigator() {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={({route})=>({
                tabBarStyle: colorScheme == "light" ? styles.tabBarLightStyle : styles.tabBarDarkStyle,
                headerStyle: colorScheme == "light" ? styles.tabBarLightStyle : styles.tabBarDarkStyle,
                headerTintColor: colorScheme == "light" ? "black" : "white",
            })}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DetailedMuseum" component={DetailedMuseumScreen} options={({ route }) => ({ title: route.params.museum.title })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBarLightStyle: {
        backgroundColor: "white",
    },
    tabBarDarkStyle: {
        backgroundColor: "black",
    }
});


