import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import MyBooks from "./MyBooks";
import HomePage from "./HomePage";
import About from "./About";

function App() {
  
  const [books, setBooks] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  function checkOutBook(book) {

    const updatedBooks = books.map(bookObj => {
      if ((bookObj.id) === (book.id)) {
        bookObj.owner = currentUser;
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`http://localhost:6001/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: currentUser
      }),
      });
      
      setBooks(updatedBooks);
  }

  function returnBook(book) {
    
    const updatedBooks = books.map(bookObj => {
      if ((bookObj.owner) === (currentUser)) {
        bookObj.owner = "";
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`http://localhost:6001/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: ""
      }),
      });
      
      setBooks(updatedBooks);
  }

  return (
    <div>       
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
          <Route exact path="/mybooks">
        <MyBooks books={books} currentUser={currentUser} returnBook={returnBook} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <HomePage books={books} setBooks={setBooks} currentUser={currentUser} checkOutBook={checkOutBook} />
        </Route>
      </Switch>
    </div>
    );
}

export default App;
