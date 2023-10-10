import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import useAllIds from "../api/useAllIds";
import { getFavourites, toggle } from "../async_storage/LocalStorage";
import { useDebounce } from "../hooks/useDebounce";

import MuseumTile from "./MuseumTile";

interface MuseumListProps {
  search: string | undefined;
}
export default function MuseumList(props: MuseumListProps) {
  const idsAction = useAllIds(props.search ?? "");
  const debounsedSearch = useDebounce(props.search, 500);

  useEffect(() => {
    idsAction.retry();
  }, [debounsedSearch]);

  const focused = useIsFocused();
  const [favIds, setFavIds] = useState<number[]>([]);

  useEffect(() => {
    getFavourites()
      .then((ids) => {
        setFavIds(ids);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    getFavourites()
      .then((ids) => {
        setFavIds(ids);
      })
      .catch(console.log);
  }, [focused]);

  function onTileTap(value: number) {
    toggle(value)
      .then((ids) => {
        setFavIds(ids);
      })
      .catch(console.log);
  }

  const renderItem = ({ item }: { item: number }) => {
    return (
      <TouchableOpacity>
        <MuseumTile
          id={item}
          onTap={() => {
            onTileTap(item);
          }}
          selected={favIds.includes(item)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {idsAction.inProgress ? (
        <Text>Loading</Text>
      ) : (
        <FlatList<number>
          data={idsAction.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
        />
      )}
    </View>
  );
}
