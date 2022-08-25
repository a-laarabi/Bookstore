import { configureStore } from '@reduxjs/toolkit';
import reducerToCheck from './categories/categories';
import reducerForAddAndRemove from './books/books';

const store = configureStore({
  reducer: {
    checkStatus: reducerToCheck,
    books: reducerForAddAndRemove,
  },
});

export default store;
