import {useEffect, useState} from "react";
import MuseumsResponse from "../model/MuseumsResponse";

export default function getAllIds(search: string): Action<Array<number>> {

    const [inProgress, setInProgress] = useState(true);
    const [museumResponse, setMuseumResponse] = useState<MuseumsResponse>();

    function action() {
        const baseLink = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
        const searchLink = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search.trim()}`

        setInProgress(true);
        fetch(search.trim().length == 0 ? baseLink : searchLink)
            .then((res) => res.json())
            .then((resp) => setMuseumResponse(resp))
            .catch(console.log)
            .finally(() => setInProgress(false))
    }

    useEffect(action, []);

    return {
        inProgress: inProgress,
        data: museumResponse?.objectIDs ?? [],
        retry: action,
    };
}