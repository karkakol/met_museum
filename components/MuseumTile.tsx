import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    TouchableHighlight
} from "react-native";
import getMuseum from "../api/getMuseum";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import {MainStackNavigation} from "../App";
import {Image} from 'expo-image';
import {Appearance} from 'react-native';
import {MOCK_IMAGE} from "../constans";
import {
    darkBackground,
    darkHighlight,
    darkSurface,
    darkText,
    lightBackground,
    lightHighlight,
    lightSurface,
    lightText
} from "../colors";
import useAppColorScheme from "../hooks/useAppColorScheme";

interface MuseumTileProps {
    id: number;
    selected: boolean,
    onFavouriteTap: Function,
}

export default function MuseumTile(props: MuseumTileProps) {
    const colorScheme = useAppColorScheme();

    const museumAction = getMuseum(props.id);
    const navigation = useNavigation<MainStackNavigation>();

    const onTileTap = () => {
        if (!museumAction.inProgress) {
            navigation.navigate("DetailedMuseum", {"museum": museumAction.data!})
        }
    }



    const tileColorScheme = colorScheme.light ? styles.tileLightColorScheme : styles.tileDarkColorScheme;
    const labelColorScheme = colorScheme.light ? styles.labelLightColorScheme : styles.labelDarkColorScheme;


    const underlayColor = colorScheme.light ? lightHighlight : darkHighlight;
    const iconButtonBackgroundColor = colorScheme.light ? lightSurface : darkSurface;
    const highlightColor = colorScheme.light ? lightHighlight : darkHighlight;
    return (
        <TouchableHighlight onPress={onTileTap} underlayColor={highlightColor} style={styles.touchableLayout}>
            <View style={[styles.tileLayout, tileColorScheme]}>

                <Image source={museumAction.data?.primaryImageSmall ?? MOCK_IMAGE} style={styles.image}
                       contentFit="cover"/>

                {museumAction.inProgress ?
                    <ActivityIndicator size="small"/> :
                    <Text style={[styles.labelLayout, labelColorScheme]}>{museumAction.data?.title}</Text>
                }
                <FontAwesome.Button name={props.selected ? "heart" : "heart-o"} color="red"
                                    backgroundColor={iconButtonBackgroundColor}
                                    underlayColor={underlayColor}
                                    onPress={() => props.onFavouriteTap()}
                />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    touchableLayout:{
      margin: 4,
        borderRadius: 12,
    },
    tileLayout: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        display: 'flex',
        fontSize: 20,
        borderRadius: 12,
    },
    tileLightColorScheme: {
        backgroundColor: lightSurface,
    },
    tileDarkColorScheme: {
        backgroundColor: darkSurface,
    },
    labelLayout: {
        flexShrink: 1,
        paddingHorizontal: 12,
    },
    labelLightColorScheme: {
        color: lightText,
    },
    labelDarkColorScheme: {
        color: darkText,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 12,
    },
});