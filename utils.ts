import type { ColorSchemeName } from "react-native";

export default function getColorScheme(
  colorScheme: ColorSchemeName,
): "light" | "dark" {
  return colorScheme ?? "light";
}
