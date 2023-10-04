import {View, Text, ActivityIndicator} from "react-native";
import getMuseum from "../api/getMuseum";
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface MuseumTileProps {
    id: number;
    selected: boolean,
    onTap: Function,
}

export default function MuseumTile(props: MuseumTileProps) {

    const museumAction = getMuseum(props.id);
    return (

        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
            padding: 10,
            backgroundColor:"white",
            borderBottomColor:"Gainsboro",
            borderBottomWidth:0.5,
        }}>
            <Text>{`${props.id}. `}</Text>
            {museumAction.inProgress ?
                <ActivityIndicator size="small"/> :
                <Text>{museumAction.data?.title}</Text>
            }
            <FontAwesome.Button name={props.selected ? "heart" : "heart-o"} color="red" backgroundColor="transparent" underlayColor="lightgrey"
                                onPress={() => props.onTap()}/>

        </View>
    )
}