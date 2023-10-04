type ApiResponse<T> = {
    inProgress: boolean;
    data: T | null;
}