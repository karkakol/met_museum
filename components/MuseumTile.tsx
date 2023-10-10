import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  useColorScheme,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

import type { MainStackNavigation } from "../App";
import { MOCK_IMAGE } from "../constans";
import { Colors } from "../colors";
import useGetMuseum from "../api/useGetMuseum";

interface MuseumTileProps {
  id: number;
  selected: boolean;
  onFavouriteTap: () => void;
}

export default function MuseumTile(props: MuseumTileProps) {
  const colorScheme = useColorScheme();

  const museumAction = useGetMuseum(props.id);
  const navigation = useNavigation<MainStackNavigation>();

  const onTileTap = () => {
    if (!museumAction.inProgress) {
      navigation.navigate("DetailedMuseum", { museum: museumAction.data! });
    }
  };

  const tileColorScheme =
    colorScheme === "light"
      ? styles.tileLightColorScheme
      : styles.tileDarkColorScheme;
  const labelColorScheme =
    colorScheme === "light"
      ? styles.labelLightColorScheme
      : styles.labelDarkColorScheme;

  const underlayColor =
    colorScheme === "light" ? Colors.lightHighlight : Colors.darkHighlight;
  const iconButtonBackgroundColor =
    colorScheme === "light" ? Colors.lightSurface : Colors.darkSurface;
  const highlightColor =
    colorScheme === "light" ? Colors.lightHighlight : Colors.darkHighlight;
  return (
    <TouchableHighlight
      onPress={onTileTap}
      underlayColor={highlightColor}
      style={styles.touchableLayout}
    >
      <View style={[styles.tileLayout, tileColorScheme]}>
        <Image
          source={museumAction.data?.primaryImageSmall ?? MOCK_IMAGE}
          style={styles.image}
          contentFit="cover"
        />

        {museumAction.inProgress ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={[styles.labelLayout, labelColorScheme]}>
            {museumAction.data?.title}
          </Text>
        )}
        <FontAwesome.Button
          name={props.selected ? "heart" : "heart-o"}
          color="red"
          backgroundColor={iconButtonBackgroundColor}
          underlayColor={underlayColor}
          onPress={() => props.onFavouriteTap()}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchableLayout: {
    margin: 4,
    borderRadius: 12,
  },
  tileLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    display: "flex",
    fontSize: 20,
    borderRadius: 12,
  },
  tileLightColorScheme: {
    backgroundColor: Colors.lightSurface,
  },
  tileDarkColorScheme: {
    backgroundColor: Colors.darkSurface,
  },
  labelLayout: {
    flexShrink: 1,
    paddingHorizontal: 12,
  },
  labelLightColorScheme: {
    color: Colors.lightText,
  },
  labelDarkColorScheme: {
    color: Colors.darkText,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
});
