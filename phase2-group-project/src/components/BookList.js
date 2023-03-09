import React from "react";
import BookCard from "./BookCard";

function BookList({books, removeBookFromState, currentUser, checkOutBook}) {
  
  const bookCardsArray = books.map( bookObj => {
    return <BookCard key={bookObj.id} book={bookObj} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} />  
  } )
  
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">{bookCardsArray}</div>
      </div>
    </section>
    );
}

export default BookList;