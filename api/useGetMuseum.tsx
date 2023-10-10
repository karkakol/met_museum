import { useEffect, useState } from "react";

import type Museum from "../model/Museum";

export default function useGetMuseum(id: number): Action<Museum> {
  const [inProgress, setInProgress] = useState(true);
  const [museum, setMuseum] = useState<Museum>();
  function action(): void {
    setInProgress(true);
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    )
      .then(async (res) => await res.json())
      .then((resp) => {
        setMuseum(resp);
      })
      .catch(console.log)
      .finally(() => {
        setInProgress(false);
      });
  }

  useEffect(action, []);

  return {
    inProgress,
    data: museum ?? null,
    retry: action,
  };
}
