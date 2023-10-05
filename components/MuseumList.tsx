import {FlatList, Text, TouchableOpacity, View} from "react-native";
import getAllIds from "../api/getAllIds";
import MuseumTile from "./MuseumTile";
import {useContext, useEffect, useState} from "react";
import {getFavourites, toggleFavourite} from "../async_storage/LocalStorage";
import {useIsFocused} from "@react-navigation/native";
import {FavouritesContext} from "../context/FavouriteContext";

interface MuseumListProps{
    search: string|undefined;
}
export default function MuseumList(props: MuseumListProps){

    const favouriteContext = useContext(FavouritesContext)
    const idsAction = getAllIds(props?.search??"");

    useEffect(() => {
        idsAction.retry();
    }, [props.search]);

    const renderItem = ({item}: { item: number }) => {

        return (
            <TouchableOpacity>
                <MuseumTile id={item} onTap={() =>favouriteContext.toggle(item)} selected={favouriteContext.favourites.includes(item) ?? false}/>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            {
                idsAction.inProgress ? <Text>Loading</Text> : <FlatList<number>
                    data={idsAction.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                />
            }

        </View>
    );
}