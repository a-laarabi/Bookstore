import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Element from '../components/Element';
import FormToAdd from '../components/FormToAdd';
import { apiFetchBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(apiFetchBook());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Element key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <FormToAdd />
    </>
  );
};

export default Books;
