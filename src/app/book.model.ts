export interface BookRecord {
    id : string,
    name : string,
    imageURL : string,
    publicationDate : string,
    genere : string,
    excerpt : string,
    writtenBy: string[]
}

export interface AppState {
    books: BookRecord[];
}