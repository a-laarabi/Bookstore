import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SKi6Zw2R9VjXy70MDrMq/books';

const initialState = [];

const reducerForAddAndRemove = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case FETCH_BOOK:
      return action.book;
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

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

export const apiFetchBook = () => async (dispatch) => {
  const books = await axios.get(BaseUrl);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

export const apiAddBook = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(BaseUrl, newBook);
  dispatch(addBook(book));
};

export const apiRemoveBook = (id) => async (dispatch) => {
  await axios.delete(`${BaseUrl}/${id}`);
  dispatch(removeBook({ id }));
};

export default reducerForAddAndRemove;
