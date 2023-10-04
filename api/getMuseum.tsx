import {useEffect, useState} from "react";
import MuseumsResponse from "../model/MuseumsResponse";
import Museum from "../model/Museum";

export default function getMuseum(id: number): ApiResponse<Museum> {

    const [inProgress, setInProgress] = useState(true);
    const [museum, setMuseum] = useState<Museum>();

    useEffect(() => {
        setInProgress(true);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then((res) => res.json())
            .then((resp) => setMuseum(resp))
            .catch(console.log)
            .finally(() => setInProgress(false))
    },[]);


    return {
        inProgress: inProgress,
        data: museum ?? null,
    };
}