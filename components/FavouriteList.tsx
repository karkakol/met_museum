import {FlatList, TouchableOpacity, View} from "react-native";
import MuseumTile from "./MuseumTile";
import {useEffect, useState} from "react";
import {getFavourites, toggle} from "../async_storage/LocalStorage";
import {useIsFocused} from "@react-navigation/native";


export default function FavouriteList() {
    const [favIds, setFavIds] = useState<Array<number>>()

    useEffect(() => {
        getFavourites().then(setFavIds)
    }, [useIsFocused()]);


    function onTileTap(value: number) {
        toggle(value).then((ids) => setFavIds(ids))
    }

    const renderItem = ({item}: { item: number }) => {

        return (
            <TouchableOpacity>
                <MuseumTile id={item} onTap={() => onTileTap(item)} selected={favIds?.includes(item) ?? false}/>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <FlatList<number>
                data={favIds}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
            />
        </View>
    );
}