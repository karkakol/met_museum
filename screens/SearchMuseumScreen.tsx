import { TextInput, View, StyleSheet, useColorScheme } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import MuseumList from "../components/MuseumList";
import { Colors } from "../colors";

export default function SearchMuseumScreen() {
  const colorScheme = useColorScheme();

  const [search, setSearch] = useState("");

  const containerColors =
    colorScheme === "light" ? styles.containerLight : styles.containerDark;
  const searchBarColors =
    colorScheme === "light" ? styles.searchBarLight : styles.searchBarDark;
  const inputColors =
    colorScheme === "light" ? styles.inputLight : styles.inputDark;
  return (
    <View style={[styles.containerLayout, containerColors]}>
      <View style={[styles.searchBar, searchBarColors]}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={[styles.inputLayout, inputColors]}
        />
        <Ionicons name="search" size={24} style={inputColors} />
      </View>

      <MuseumList search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLayout: {
    paddingVertical: 4,
  },
  containerLight: {
    backgroundColor: Colors.lightBackground,
  },
  containerDark: {
    backgroundColor: Colors.darkBackground,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",

    fontSize: 24,
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  searchBarLight: {
    backgroundColor: Colors.lightSurface,
  },
  searchBarDark: {
    backgroundColor: Colors.darkSurface,
  },
  inputLayout: {
    flex: 1,
    fontSize: 24,
  },
  inputLight: {
    color: Colors.lightText,
  },
  inputDark: {
    color: Colors.darkText,
  },
});
