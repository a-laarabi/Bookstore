import React from 'react';
import Element from '../components/Element';
import FormToAdd from '../components/FormToAdd';

const Books = () => {
  const books = [
    { id: 1, title: 'Influence & manipulation', author: 'Robert Cialdini' },
    { id: 2, title: '7 secrets of warren buffett', author: 'Mary Buffett' },
  ];

  return (
    <>
      {books.map((book) => (
        <Element key={book.id} title={book.title} author={book.author} />
      ))}
      <FormToAdd />
    </>
  );
};

export default Books;
