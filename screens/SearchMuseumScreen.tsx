import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import MuseumList from "../components/MuseumList";

export default function SearchMuseumScreen() {
  const [search, setSearch] = useState("");

  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={styles.input}
        />
        <Ionicons name="search" style={styles.searchIcon} />
      </View>

      <MuseumList search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  searchIcon: {
    fontSize: 20,
  },
});
