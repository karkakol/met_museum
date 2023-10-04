type Action<T> = {
    inProgress: boolean;
    data: T | null;
    retry: Function;
}