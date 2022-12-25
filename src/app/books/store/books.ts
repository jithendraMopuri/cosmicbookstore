export interface Book {
    id : string,
    name : string,
    imageURL : string,
    publicationDate : string,
    genere : string,
    excerpt : string,
    writtenBy: string[],
    publisher : string
}