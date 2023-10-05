import {View, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";
import getMuseum from "../api/getMuseum";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import {MainStackNavigation} from "../App";
import {Image} from 'expo-image';
import Animated from 'react-native-reanimated';
import {MOCK_IMAGE} from "../constans";

interface MuseumTileProps {
    id: number;
    selected: boolean,
    onFavouriteTap: Function,
}

export default function MuseumTile(props: MuseumTileProps) {

    const museumAction = getMuseum(props.id);
    const navigation = useNavigation<MainStackNavigation>()

    const onTileTap = () => {
        if (!museumAction.inProgress) {
            navigation.navigate("DetailedMuseum", {"museum": museumAction.data!})
        }
    }

    return (
        <TouchableOpacity onPress={onTileTap}>
            <View style={styles.tile}>

                <Animated.View sharedTransitionTag={museumAction.data?.objectID.toString()}>
                    <Image source={museumAction.data?.primaryImageSmall ?? MOCK_IMAGE} style={styles.image} contentFit="cover"/>
                </Animated.View>
                {museumAction.inProgress ?
                    <ActivityIndicator size="small"/> :
                    <Text style={styles.label}>{museumAction.data?.title}</Text>
                }
                <FontAwesome.Button name={props.selected ? "heart" : "heart-o"} color="red"
                                    backgroundColor="transparent"
                                    underlayColor="lightgrey"
                                    onPress={() => props.onFavouriteTap()}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tile: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        display: 'flex',
        margin: 1,
        fontSize: 20,
    },
    label: {
        flexShrink: 1,
        paddingHorizontal: 12,
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: '#0553',
        borderRadius: 12,
    },
});