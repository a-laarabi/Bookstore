import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { apiAddBook } from '../redux/books/books';

const FormToAdd = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(apiAddBook({ id: uuidv4(), title, author }));
      e.target.reset();
    }
  };

  return (
    <div id="addBook">
      <h2>Add new Book</h2>
      <form className="form_addBook" onSubmit={handleClick}>
        <input className="input-book" type="text" placeholder="Add Book" onChange={titleChange} required />
        <input className="input-author" type="text" placeholder="Add Author" onChange={authorChange} required />
        <button className="button-submit" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default FormToAdd;
