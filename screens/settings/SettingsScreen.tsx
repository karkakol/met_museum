import {useColorScheme, View} from 'react-native';
import { StyleSheet } from 'react-native';

import {darkBackground, lightBackground} from "../../colors";
import {ToggleThemeTile} from "./components/ToggleThemeTile";
export default function SettingsScreen () {
  const colorScheme = useColorScheme();

  const containerColors = colorScheme == "light" ? styles.containerLight : styles.containerDark;

    return (
      <View style={[styles.containerLayout, containerColors]}>
        <ToggleThemeTile />
      </View>
    );

}

const styles = StyleSheet.create({
  containerLayout:{
    display:"flex",
    flexDirection:"column",
    height: '100%',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  containerLight:{
    backgroundColor: lightBackground,
  },
  containerDark:{
    backgroundColor: darkBackground,
  },
});
