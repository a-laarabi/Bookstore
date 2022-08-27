import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { apiRemoveBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(apiRemoveBook(id));
  };

  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Delete</button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
