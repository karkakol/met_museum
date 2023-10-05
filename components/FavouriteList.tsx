import {FlatList, TouchableOpacity, View} from "react-native";
import MuseumTile from "./MuseumTile";
import {useContext} from "react";
import {FavouritesContext} from "../context/FavouriteContext";


export default function FavouriteList() {
    const favouriteContext = useContext(FavouritesContext)

    const renderItem = ({item}: { item: number }) => {
        return (
            <TouchableOpacity>
                <MuseumTile id={item} onTap={() => favouriteContext.toggle(item)} selected={favouriteContext.favourites.includes(item) ?? false}/>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <FlatList<number>
                data={favouriteContext.favourites}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
            />
        </View>
    );
}