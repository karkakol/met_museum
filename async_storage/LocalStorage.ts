import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVOURITE_KEY = "Favourite"

export async function getFavourites(): Promise<Array<number>> {
    try {
        const raw = await AsyncStorage.getItem(FAVOURITE_KEY);
        if (raw?.trim().length == 0 ?? true) return [];
        return <number[]>JSON.parse(raw!);
    } catch (e) {
        console.log(e);
    }
    return [];
}

export async function setFavourites(elements: Array<number>) {
    try {
        await AsyncStorage.setItem(FAVOURITE_KEY, JSON.stringify(elements))
    } catch (e) {
        console.log(e);
    }
}

export async function toggleFavourite(id: number): Promise<Array<number>> {
    let fav = (await getFavourites()) ?? [];
    if (fav.includes(id)) {
        let newFav = fav.filter((e) => e != id);
        await setFavourites(newFav);
        return newFav;
    } else {
        fav.push(id);
        await setFavourites(fav);
        return fav;
    }
}
