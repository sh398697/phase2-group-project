import React from "react";

function BookCard({book}) {
  return (
      <div className="card">
        <li>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Published: {book.year}</p>
          <img src={book.image} alt={book.title} />
          <p>{book.review}</p>
        </li>
      </div>
    );
 
}

export default BookCard;