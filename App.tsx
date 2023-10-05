import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {FavouritesProvider} from "./providers/FavouritesProvider";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailedMuseumScreen from "./screens/DetailedMuseumScreen";
import Museum from "./model/Museum";

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
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DetailedMuseum" component={DetailedMuseumScreen} options={({ route }) => ({ title: route.params.museum.title })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



