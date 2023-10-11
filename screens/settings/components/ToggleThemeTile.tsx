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

import { getAppColors } from "../../../utils/colors";

import setColorScheme = Appearance.setColorScheme;

import { getAppStyles } from "../../../utils/styles";

export function ToggleThemeTile() {
  const colorScheme = useColorScheme();

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === "light") setColorScheme("dark");
    else setColorScheme("light");
  }, [colorScheme]);

  const { surfaceStyle, textStyle } = getAppStyles(colorScheme);
  const { textColor, highlightColor } = getAppColors(colorScheme);

  const label =
    colorScheme === "light" ? "Enable dark mode" : "Enable light mode";

  return (
    <TouchableHighlight
      onPress={toggleColorScheme}
      underlayColor={highlightColor}
      style={styles.touchable}
    >
      <View style={[styles.containerLayout, surfaceStyle]}>
        <Text style={[styles.labelLayout, textStyle]}>{label}</Text>
        <MaterialIcons name="invert-colors" size={32} color={textColor} />
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
  labelLayout: {
    fontSize: 20,
  },
});
