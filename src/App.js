import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
