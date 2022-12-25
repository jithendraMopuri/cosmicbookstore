import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Book } from "./books";
import { BooksActions } from "./books.action";

export const initialState: ReadonlyArray<Book> = [
    {
        id : 'xer-123-134',
    name : 'Jithendra',
    imageURL : 'https://',
    publicationDate : 'Mon Jan 01 1990 00:00:00 GMT+0530 (India Standard Time)',
    genere : 'horror',
    excerpt : 'excerpt',
    writtenBy: ['J.K. Rowling'],
    publisher:'Arihant Books'
    }
];

export const bookReducer = createReducer(
    initialState,
    on(BooksActions.addBook,(state, {newBook}) => {
        let newState = [...state];
        newState.unshift(newBook);
        return newState;
    }),
    on(BooksActions.removeBook,(state, {bookId}) => {
        let newState = state.filter((_) => _.id != bookId);
        return newState;
    }),
    on(BooksActions.updateBook,(state, {updateBook}) => {
        let newState = state.filter((_) => _.id != updateBook.id);
        newState.unshift(updateBook);
        return newState;
    }),
)