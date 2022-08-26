import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Influence & Manipulation',
    author: 'Robert Cialdini',
    id: uuidv4(),
  },
  {
    title: '7 secrets of warren buffett',
    author: 'Mary buffett',
    id: uuidv4(),
  },
];

const reducerForAddAndRemove = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export default reducerForAddAndRemove;
