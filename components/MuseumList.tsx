import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import getAllIds from "../api/getAllIds";
import MuseumTile from "./MuseumTile";
import {useContext, useEffect} from "react";
import {FavouritesContext} from "../providers/FavouritesProvider";
import {darkBackground, lightBackground} from "../colors";
import useAppColorScheme from "../hooks/useAppColorScheme";

interface MuseumListProps {
    search: string | undefined;
}

export default function MuseumList(props: MuseumListProps) {
    const colorScheme = useAppColorScheme();

    const favouriteContext = useContext(FavouritesContext)
    const idsAction = getAllIds(props?.search ?? "");

    useEffect(() => {
        idsAction.retry();
    }, [props.search]);

    const renderItem = ({item}: { item: number }) => {
        return (
            <MuseumTile id={item} onFavouriteTap={() => favouriteContext.toggle(item)}
                        selected={favouriteContext.selected(item) ?? false}/>
        );
    };
    const containerColors = colorScheme.light ? styles.containerLight : styles.containerDark;

    return (
        <View style={[styles.containerLayout, containerColors]}>
            {
                idsAction.inProgress ? <ActivityIndicator style={styles.loadingLayout} size="large"/> :
                    <FlatList<number>
                        style={styles.listLayout}
                        data={idsAction.data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.toString()}
                    />
            }

        </View>
    );
}

const styles = StyleSheet.create({
    containerLayout: {
        height: "100%",

    },
    listLayout: {
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    loadingLayout: {
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    containerLight: {
        backgroundColor: lightBackground,
    },
    containerDark: {
        backgroundColor: darkBackground,
    },
});