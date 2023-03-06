import { useState, useEffect } from "react";
import NewBookForm from "./NewBookForm";
import Search from "./Search";
import BookList from "./BookList";

function App() {

  const [ books, setBooks ] = useState( [] )

  const addBookToState = bookObj => {
    setBooks( [ ...books, bookObj ] )
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
        <NewBookForm addBookToState={ addBookToState } />
        <Search changeSearchTerm={ changeSearchTerm } />
        <BookList books={searchedBooks} />
      </div>
    );
 
}

export default App;