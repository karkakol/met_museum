import {View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainRootStackParamList} from "../App";
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Image} from "expo-image";
import {MOCK_IMAGE} from "../constans";
import {useMemo} from "react";
import {darkBackground, lightBackground} from "../colors";
import useAppColorScheme from "../hooks/useAppColorScheme";

type Props = NativeStackScreenProps<MainRootStackParamList, "DetailedMuseum">;

export default function DetailedMuseumScreen({route}: Props) {
    const colorScheme = useAppColorScheme();

    const museum = route.params.museum
    let imageUrl = useMemo(() => museum.primaryImageSmall.trim().length == 0 ?
        MOCK_IMAGE :
        museum.primaryImageSmall, [],
    )

    const containerColors = colorScheme.light ? styles.containerLight : styles.containerDark;

    return (
        <View style={[styles.containerLayout, containerColors]}>
            <Image source={imageUrl} style={styles.image} contentFit="cover"/>
        </View>
    )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerLayout: {
        height: "100%",
        padding: 20,
        display: "flex",
        alignItems: "center"
    },
    containerLight:{
        backgroundColor: lightBackground,
    },
    containerDark:{
        backgroundColor: darkBackground,
    },
    image: {
        width: screenWidth - 40,
        height: screenWidth - 40,
        borderRadius: 20,
    }
});




