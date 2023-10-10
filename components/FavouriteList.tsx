import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getFavourites, toggle } from "../async_storage/LocalStorage";

import MuseumTile from "./MuseumTile";

export default function FavouriteList() {
  const [favIds, setFavIds] = useState<number[]>([]);

  const focused = useIsFocused();

  useEffect(() => {
    getFavourites().then(setFavIds).catch(console.log);
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
      <FlatList<number>
        data={favIds}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}
