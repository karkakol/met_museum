import {TextInput, View, StyleSheet} from "react-native";
import MuseumList from "../components/MuseumList";
import {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchMuseumScreen() {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setSearch}
                    value={search}
                    style={styles.input}
                />
                <Ionicons name="search" style={styles.searchIcon}/>
            </View>

            <MuseumList search={search}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: "white",
        paddingVertical: 4,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ededed',
        paddingVertical: 4,
        paddingLeft: 12,
        paddingRight: 8,
        borderRadius: 8,
        marginHorizontal: 12,
        elevation: 2,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    searchIcon: {
        fontSize: 20,
    },
});