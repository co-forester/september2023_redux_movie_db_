export interface iPagination<T> {
    total_items:number;
    total_pages:number;
    prev:string;
    next:string;
    items: T[]
}