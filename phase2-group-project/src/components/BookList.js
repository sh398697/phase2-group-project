import React from "react";
import BookCard from "./BookCard";

function BookList({books}) {
  
  const bookCardsArray = books.map( bookObj => {
    return <BookCard key={ bookObj.id } book={ bookObj } />  
  } )
  
  return (
      <div className="cards">{bookCardsArray}</div>
    );
}

export default BookList;