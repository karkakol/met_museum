import {useEffect, useState} from "react";
import Museum from "../model/Museum";

export default function getMuseum(id: number): Action<Museum> {

    const [inProgress, setInProgress] = useState(true);
    const [museum, setMuseum] = useState<Museum>();

    function action() {
        setInProgress(true);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then((res) => res.json())
            .then((resp) => setMuseum(resp))
            .catch(console.log)
            .finally(() => setInProgress(false))
    }

    useEffect(action, []);

    return {
        inProgress: inProgress,
        data: museum ?? null,
        retry: action,
    };
}