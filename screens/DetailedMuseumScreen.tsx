import {Text, View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainRootStackParamList, MainStackNavigation} from "../App";
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Image} from "expo-image";
import Animated from 'react-native-reanimated';

type Props = NativeStackScreenProps<MainRootStackParamList, "DetailedMuseum">;

export default function DetailedMuseumScreen({route}: Props) {
    const museum = route.params.museum

    return (
        <View style={styles.background}>
            <Animated.View sharedTransitionTag={museum.objectID.toString()} >
                <Image source={museum.primaryImageSmall} style={styles.image} contentFit="cover"/>
            </Animated.View>

        </View>
    )
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "white",
        padding: 20,
        display: "flex",
        alignItems: "center"
    },
    image: {
        width: screenWidth - 40,
        height: screenWidth - 40,
        borderRadius: 20,
    }
});




