import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVOURITE_KEY = "Favourite";

export async function getFavourites(): Promise<number[]> {
  try {
    const raw = await AsyncStorage.getItem(FAVOURITE_KEY);
    if ((raw?.trim().length ?? 0) === 0) return [];

    return JSON.parse(raw!) as number[];
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function setFavourites(elements: number[]): Promise<void> {
  try {
    await AsyncStorage.setItem(FAVOURITE_KEY, JSON.stringify(elements));
  } catch (e) {
    console.log(e);
  }
}

export async function toggle(id: number): Promise<number[]> {
  const fav = await getFavourites();
  if (fav.includes(id)) {
    const newFav = fav.filter((e) => e !== id);
    await setFavourites(newFav);
    return newFav;
  } else {
    fav.push(id);
    await setFavourites(fav);
    return fav;
  }
}
