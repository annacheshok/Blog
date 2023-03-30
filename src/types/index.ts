export interface IPost {
    "id": number;
    "title": string;
    "url": string;
    "imageUrl": string;
    "newsSite": string;
    "summary": string;
    "publishedAt": string;
    "updatedAt": string;
    "featured": boolean;
    "launches": [];
    "events": [];
}

export interface IPosts {
    posts: IPost[]
}

export interface IGetPosts {
    category: string;
    page: number;
    count: number;
    filter?: string;
    sort?: string;
    search?: string;
}