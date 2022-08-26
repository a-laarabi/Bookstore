import React from 'react';
import { useSelector } from 'react-redux';
import Element from '../components/Element';
import FormToAdd from '../components/FormToAdd';

const Books = () => {
  const books = useSelector((state) => state.books);

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
