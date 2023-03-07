import React from "react";
import BookCard from "./BookCard";

function BookList({books, removeBookFromState, currentUser, checkOutBook}) {
  
  const bookCardsArray = books.map( bookObj => {
    return <BookCard key={bookObj.id} book={bookObj} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} />  
  } )
  
  return (
      <div className="cards">{bookCardsArray}</div>
    );
}

export default BookList;