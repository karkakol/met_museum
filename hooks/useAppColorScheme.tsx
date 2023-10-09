import {Appearance, ColorSchemeName} from 'react-native';
import {useEffect, useState} from "react";
import getColorScheme = Appearance.getColorScheme;

type AppColorScheme = {
    colorSchemeName: ColorSchemeName,
    light: boolean,
    dark: boolean,
}

export default function useAppColorScheme(): AppColorScheme {

    const [colorSchemeName, setColorSchemeName] = useState(getColorScheme());

    useEffect(() => {
        const subscription = Appearance.addChangeListener((preferences) => {
            setColorSchemeName(preferences.colorScheme);
        })

        return subscription.remove;
    }, []);

    return {colorSchemeName: colorSchemeName, light: colorSchemeName === 'light', dark: colorSchemeName === 'dark'};
}