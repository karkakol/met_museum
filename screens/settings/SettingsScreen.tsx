import { useColorScheme, View, StyleSheet } from "react-native";

import { Colors } from "../../colors";

import { ToggleThemeTile } from "./components/ToggleThemeTile";
export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  const containerColors =
    colorScheme === "light" ? styles.containerLight : styles.containerDark;

  return (
    <View style={[styles.containerLayout, containerColors]}>
      <ToggleThemeTile />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLayout: {
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  containerLight: {
    backgroundColor: Colors.lightBackground,
  },
  containerDark: {
    backgroundColor: Colors.darkBackground,
  },
});
