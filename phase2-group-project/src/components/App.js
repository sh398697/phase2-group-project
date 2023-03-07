import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import MyBooks from "./MyBooks";
import HomePage from "./HomePage";
import '../App.css';
import Search from "./Search";

function App() {
  
  const [books, setBooks] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const [updatedBook, setUpdatedBook] = useState([]);


  function checkOutBook(book) {
    setUpdatedBook(() => {
      return {
        title: book.title,
        author: book.author,
        genre: book.genre,
        image: book.image,
        review: book.review,
        owner: {currentUser}
      };
    });

     fetch(`http://localhost:6001/books/${book.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });
    }
  



  
  return (
    <div>       
      <Header />
      <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <MyBooks books={books} currentUser={currentUser} />
      <HomePage books={books} setBooks={setBooks} currentUser={currentUser} checkOutBook={checkOutBook} />
    </div>
    );
}

export default App;
