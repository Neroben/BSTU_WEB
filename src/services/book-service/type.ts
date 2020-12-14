export interface IBooks {
    id: number;
    name: string;
    description: string;
    author_id: number | null;
    sizeChapter: number | null;
    time: string | null;
}