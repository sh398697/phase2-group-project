import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import MyBooks from "./MyBooks";
import HomePage from "./HomePage";
import '../App.css';
import Search from "./Search";
import About from "./About";

function App() {
  
  const [books, setBooks] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const [updatedBook, setUpdatedBook] = useState([])


  function checkOutBook(book) {

    setUpdatedBook( {
        title: book.title,
        author: book.author,
        genre: book.genre,
        image: book.image,
        review: book.review,
        owner: currentUser
    });

    console.log(book.title);

     fetch(`http://localhost:6001/books/${book.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: book.title,
          author: book.author,
          genre: book.genre,
          image: book.image,
          review: book.review,
          owner: currentUser
      }),
      });
  
  }


  return (
    <div>       
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
          <Route exact path="/mybooks">
        <MyBooks books={books} currentUser={currentUser} />
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
