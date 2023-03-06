import React from "react";
import BookCard from "./BookCard";

function BookList({books, removeBookFromState}) {
  
  const bookCardsArray = books.map( bookObj => {
    return <BookCard key={bookObj.id} book={bookObj} removeBookFromState={removeBookFromState} />  
  } )
  
  return (
      <div className="cards">{bookCardsArray}</div>
    );
}

export default BookList;