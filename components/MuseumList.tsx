import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import getAllIds from "../api/getAllIds";
import MuseumTile from "./MuseumTile";
import {useContext, useEffect} from "react";
import {FavouritesContext} from "../providers/FavouritesProvider";



interface MuseumListProps {
    search: string | undefined;
}

export default function MuseumList(props: MuseumListProps) {
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
    return (
        <View>
            {
                idsAction.inProgress ? <ActivityIndicator style={styles.wrapper} size="large"/> : <FlatList<number>
                    data={idsAction.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                />
            }

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
});