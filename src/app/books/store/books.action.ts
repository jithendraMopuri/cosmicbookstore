import { createAction, createActionGroup, props } from "@ngrx/store";
import { Book } from "./books";


export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
      'Add Book': props<{ newBook : Book}>(),
      'Remove Book': props<{ bookId: string }>(),
      'Update Book': props<{updateBook: Book}>()
    },
  });