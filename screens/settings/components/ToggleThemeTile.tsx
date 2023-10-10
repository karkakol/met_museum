import {
  Appearance,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../../../colors";

import setColorScheme = Appearance.setColorScheme;

export function ToggleThemeTile() {
  const colorScheme = useColorScheme();

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === "light") setColorScheme("dark");
    else setColorScheme("light");
  }, [colorScheme]);

  const containerColors =
    colorScheme === "light"
      ? styles.containerLightColors
      : styles.containerDarkColors;
  const labelColors =
    colorScheme === "light" ? styles.labelLightColors : styles.labelDarkColors;

  const label =
    colorScheme === "light" ? "Enable dark mode" : "Enable light mode";

  const iconColor =
    colorScheme === "light" ? Colors.lightText : Colors.darkText;
  const highlightColor =
    colorScheme === "light" ? Colors.lightHighlight : Colors.darkHighlight;
  return (
    <TouchableHighlight
      onPress={toggleColorScheme}
      underlayColor={highlightColor}
      style={styles.touchable}
    >
      <View style={[styles.containerLayout, containerColors]}>
        <Text style={[styles.labelLayout, labelColors]}>{label}</Text>
        <MaterialIcons name="invert-colors" size={32} color={iconColor} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 12,
  },
  containerLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 8,
  },
  containerLightColors: {
    backgroundColor: Colors.lightSurface,
  },
  containerDarkColors: {
    backgroundColor: Colors.darkSurface,
  },
  labelLayout: {
    fontSize: 20,
  },
  labelLightColors: {
    color: Colors.lightText,
  },
  labelDarkColors: {
    color: Colors.darkText,
  },
});
