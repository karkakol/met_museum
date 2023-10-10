import { useColorScheme, View, StyleSheet, Dimensions } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { useMemo } from "react";

import { MOCK_IMAGE } from "../constans";
import type { MainRootStackParamList } from "../App";
import { darkBackground, lightBackground } from "../colors";

type Props = NativeStackScreenProps<MainRootStackParamList, "DetailedMuseum">;

export default function DetailedMuseumScreen({ route }: Props) {
  const colorScheme = useColorScheme();

  const museum = route.params.museum;
  const imageUrl = useMemo(
    () =>
      museum.primaryImageSmall.trim().length === 0
        ? MOCK_IMAGE
        : museum.primaryImageSmall,
    [],
  );

  const containerColors =
    colorScheme === "light" ? styles.containerLight : styles.containerDark;

  return (
    <View style={[styles.containerLayout, containerColors]}>
      <Image source={imageUrl} style={styles.image} contentFit="cover" />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  containerLayout: {
    height: "100%",
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  containerLight: {
    backgroundColor: lightBackground,
  },
  containerDark: {
    backgroundColor: darkBackground,
  },
  image: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    borderRadius: 20,
  },
});
