import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NewBookForm from "./NewBookForm";
import Search from "./Search";
import BookList from "./BookList";

function HomePage({books, setBooks, currentUser, checkOutBook}) {

  const addBookToState = bookObj => {
    setBooks( [ ...books, bookObj ] )
  }

  function removeBookFromState(bookID) {
    
    const filteredArray = books.filter(book => {
      return (book.id !== bookID)
    })
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
        <NewBookForm currentUser={currentUser} addBookToState={ addBookToState }/>
        <Search changeSearchTerm={ changeSearchTerm } />
        <BookList books={searchedBooks} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} />
      </div>
    );
}

export default HomePage;