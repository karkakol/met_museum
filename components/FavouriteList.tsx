import {
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";

import { FavouritesContext } from "../providers/FavouritesProvider";
import { darkBackground, lightBackground } from "../colors";

import MuseumTile from "./MuseumTile";

export default function FavouriteList() {
  const favouriteContext = useContext(FavouritesContext);
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: { item: number }) => {
    return (
      <TouchableOpacity>
        <MuseumTile
          id={item}
          onFavouriteTap={() => favouriteContext.toggle(item)}
          selected={favouriteContext.favourites.includes(item)}
        />
      </TouchableOpacity>
    );
  };

  const containerColors =
    colorScheme === "light" ? styles.containerLight : styles.containerDark;

  return (
    <View style={[styles.containerLayout, containerColors]}>
      <FlatList<number>
        style={styles.listLayout}
        data={favouriteContext.favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLayout: {
    height: "100%",
  },
  listLayout: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  containerLight: {
    backgroundColor: lightBackground,
  },
  containerDark: {
    backgroundColor: darkBackground,
  },
});
