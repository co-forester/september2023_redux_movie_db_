
export interface IPagination<T> {
    items: T[];
    page: string;
    total_pages: string
}