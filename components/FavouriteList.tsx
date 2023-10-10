import {
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";

import { FavouritesContext } from "../providers/FavouritesProvider";
import { Colors } from "../colors";

import MuseumTile from "./MuseumTile";

export default function FavouriteList() {
  const { favourites, toggle } = useContext(FavouritesContext);
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: { item: number }) => {
    return (
      <TouchableOpacity>
        <MuseumTile
          id={item}
          onFavouriteTap={() => toggle(item)}
          selected={favourites.includes(item)}
        />
      </TouchableOpacity>
    );
  };

  const containerColors =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.containerLayout, containerColors]}>
      <FlatList<number>
        style={styles.listLayout}
        data={favourites}
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
    padding: 8,
  },
  lightContainer: {
    backgroundColor: Colors.lightBackground,
  },
  darkContainer: {
    backgroundColor: Colors.darkBackground,
  },
});
