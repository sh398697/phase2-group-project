import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Route, Switch } from "react-router-dom";
import NewBookForm from "./NewBookForm";
import Search from "./Search";
import BookList from "./BookList";

function App() {

  const [books, setBooks] = useState([])

  const addBookToState = bookObj => {
    setBooks( [ ...books, bookObj ] )
  }

  function removeBookFromState(bookID) {
    
    const filteredArray = books.filter(book => {
      return (book.id !== bookID)
    })
    console.log("Delete function")
    setBooks(filteredArray)
  }

  const [ searchTerm, setSearchTerm ] = useState( '' )

  const changeSearchTerm = newString => setSearchTerm( newString.toLowerCase() )

  const byTitle = bookObj => {
    if( bookObj.title.toLowerCase().includes( searchTerm ) ) {
      return true
    }
  }

  const searchedBooks = books.filter( byTitle )

  useEffect( () => {
    fetch( 'http://localhost:6001/books' )
      .then( r => r.json() )
      .then( setBooks )
  }, [] )

  return (
      <div className="homePage">
        <Route path="/newbook">
          <NewBookForm addBookToState={ addBookToState }/>
        </Route>
        <Route path="/search">
          <Search changeSearchTerm={ changeSearchTerm } />
        </Route>
        <BookList books={searchedBooks} removeBookFromState={removeBookFromState} />
      </div>
    );
 
}

export default App;