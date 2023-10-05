import {View, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";
import getMuseum from "../api/getMuseum";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import {MainStackNavigation} from "../App";

interface MuseumTileProps {
    id: number;
    selected: boolean,
    onFavouriteTap: Function,
}

export default function MuseumTile(props: MuseumTileProps) {

    const museumAction = getMuseum(props.id);
    const navigation = useNavigation<MainStackNavigation>()

    const onTileTap = ()=>{
        if(!museumAction.inProgress){
            navigation.navigate("DetailedMuseum", {"museum": museumAction.data!})
        }
    }

    return (
        <TouchableOpacity onPress={onTileTap}>
        <View style={styles.tile}>
            <Text>{`${props.id}. `}</Text>
            {museumAction.inProgress ?
                <ActivityIndicator size="small"/> :
                <Text style={styles.label}>{museumAction.data?.title}</Text>
            }
            <FontAwesome.Button name={props.selected ? "heart" : "heart-o"} color="red" backgroundColor="transparent"
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
    },
    label:{
        flexShrink: 1,
        paddingHorizontal: 12,
    }
});