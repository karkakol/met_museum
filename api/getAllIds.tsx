import {useEffect, useState} from "react";

import MuseumsResponse from "../model/MuseumsResponse";

export default function getAllIds(): ApiResponse<Array<number>> {

    const [inProgress, setInProgress] = useState(true);
    const [museumResponse, setMuseumResponse] = useState<MuseumsResponse>();

    useEffect(() => {
        setInProgress(true);
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
            .then((res) => res.json())
            .then((resp) => setMuseumResponse(resp))
            .catch(console.log)
            .finally(() => setInProgress(false))
    },[]);


    return {
        inProgress: inProgress,
        data: museumResponse?.objectIDs ?? [],
    };
}