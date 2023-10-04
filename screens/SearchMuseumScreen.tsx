import { TextInput, View} from "react-native";
import MuseumList from "../components/MuseumList";
import {useState} from "react";

export default function SearchMuseumScreen(){
    const [search, setSearch] = useState('');

    return (
        <View>
            <TextInput
                onChangeText={setSearch}
                value={search}
            />
            <MuseumList search={search}/>
        </View>
    );
}