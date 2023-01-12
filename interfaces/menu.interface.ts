interface Id {
    secondCategory?: string;
}
interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface IMenuItem {
    _id?: Id;
    pages?: PageItem[];
}
