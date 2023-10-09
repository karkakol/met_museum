import {Appearance, Button, Pressable, StyleSheet, Switch, Text, TouchableHighlight, View} from "react-native";
import useAppColorScheme from "../../../hooks/useAppColorScheme";
import {useCallback, useState} from "react";
import {
    darkHighlight,
    darkSurface,
    darkText,
    lightBackground,
    lightHighlight,
    lightSurface,
    lightText
} from "../../../colors";
import {MaterialIcons} from '@expo/vector-icons';

export function ToggleThemeTile() {
    const colorScheme = useAppColorScheme();

    const toggleColorScheme = useCallback(() => {
        if (colorScheme.light) Appearance.setColorScheme("dark");
        else Appearance.setColorScheme("light");

    }, [colorScheme]);

    const containerColors = colorScheme.light ? styles.containerLightColors : styles.containerDarkColors;
    const labelColors = colorScheme.light ? styles.labelLightColors : styles.labelDarkColors;


    const label = colorScheme.light ? "Enable dark mode" : "Enable light mode";

    const iconColor = colorScheme.light ? lightText : darkText;
    const highlightColor = colorScheme.light ? lightHighlight : darkHighlight;
    return (
        <TouchableHighlight onPress={toggleColorScheme} underlayColor={highlightColor} style={styles.touchable}>
            <View style={[styles.containerLayout, containerColors]}>
                <Text style={[styles.labelLayout, labelColors]}>{label}</Text>
                <MaterialIcons name="invert-colors" size={32} color={iconColor}/>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    touchable:{
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
        backgroundColor: lightSurface
    },
    containerDarkColors: {
        backgroundColor: darkSurface
    },
    labelLayout: {
        fontSize: 20,
    },
    labelLightColors: {
        color: lightText,
    },
    labelDarkColors: {
        color: darkText,
    },

});
