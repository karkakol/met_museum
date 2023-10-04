import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVOURITE_KEY = "Favourite"

async function getFavourites() : Promise<Array<number>>{
    try{
        const raw = await AsyncStorage.getItem(FAVOURITE_KEY);
        if(raw?.trim().length == 0 ?? true) return [];
        return <number[]>JSON.parse(raw!);
    }catch(e){
        console.log(e);
    }
    return [];
}

async function setFavourites(elements: Array<number>) {
    try{
        await AsyncStorage.setItem(FAVOURITE_KEY,JSON.stringify(elements))
    }catch(e){
        console.log(e);
    }
}

async function toggle(id: number):Promise<Array<number>> {
    let fav = await getFavourites();
    if(fav.includes(id)){
        let index =fav.findIndex((val) => val == id);
        let newFav = fav.
    }

}