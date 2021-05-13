import React, { useState, useEffect } from 'react';
import "./App.css";
import BookList from './components/bookList';
import Spinner from 'react-bootstrap/Spinner'
function App() {

  const [books, setBook] = useState([]);

  const loadBooks = () => {
    fetch(`${process.env.PUBLIC_URL}/books.json`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        setBook(json);
      })
  }


  useEffect(() => {
    loadBooks();
  }, []);





  return (
    <div className="App">
      <h1>Book Store</h1>
      { books === null ?
        <Spinner animation="border" role="status" variant="success">
          <span className="sr-only">Loading...</span>
        </Spinner>
        :
        <BookList books={books} />
      }
    </div>
  );
}

export default App;
