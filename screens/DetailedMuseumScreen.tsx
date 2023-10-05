import {Text, View} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {MainRootStackParamList, MainStackNavigation} from "../App";
import { StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native";

type Props = NativeStackScreenProps<MainRootStackParamList, "DetailedMuseum">;

export default function DetailedMuseumScreen({route}: Props){
    const museum = route.params.museum
    console.log(museum)

    return(
        <View>
            <Text>{museum.artistDisplayName}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

});




