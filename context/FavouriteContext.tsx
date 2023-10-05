import {createContext, useEffect, useState} from "react";
import {getFavourites, toggleFavourite} from "../async_storage/LocalStorage";

interface FavouriteContextModel {
    favourites: Array<number>;

    toggle(id: number): void;

    loading: boolean;
}

export const FavouritesContext = createContext<FavouriteContextModel>({
    loading: true, favourites: [], toggle(id: number) {
    }
});

export const FavouritesProvider = (props: any) => {

    const [favourites, setFavourites] = useState<Array<number>>([]);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getFavourites()
            .then(setFavourites)
            .catch(console.log)
            .finally(() => setLoading(false))
    }, []);

    const toggle = (id: number): void => {
        toggleFavourite(id).then(setFavourites).catch(console.log);
    }


    return (
        <FavouritesContext.Provider value={{favourites: favourites, loading: loading, toggle: toggle}}>
            {props.children}
        </FavouritesContext.Provider>
    )
}
