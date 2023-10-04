import {FlatList, Text, TouchableOpacity, View} from "react-native";
import getAllIds from "../api/getAllIds";
import MuseumTile from "./MuseumTile";
import {useEffect, useState} from "react";
import {getFavourites, toggle} from "../async_storage/LocalStorage";
import {useIsFocused} from "@react-navigation/native";

interface MuseumListProps{
    search: string|undefined;
}
export default function MuseumList(props: MuseumListProps){
    const idsAction = getAllIds(props?.search??"");

    useEffect(() => {
        idsAction.retry();
    }, [props.search]);

    const focused = useIsFocused();
    const [favIds, setFavIds] = useState<Array<number>>([])

    useEffect(() => {
        getFavourites().then((ids) => setFavIds(ids))
    }, []);

    useEffect(() => {
        getFavourites().then((ids) => setFavIds(ids))
    }, [focused]);

    function onTileTap(value: number){
        toggle(value).then((ids) => setFavIds(ids))
    }

    const renderItem = ({item}: { item: number }) => {

        return (
            <TouchableOpacity>
                <MuseumTile id={item} onTap={() =>onTileTap(item)} selected={favIds?.includes(item) ?? false}/>
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