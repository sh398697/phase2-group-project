import React from "react";

function BookCard({book, removeBookFromState}) {
  


  function handleDelete(id) {
    fetch(`http://localhost:6001/books/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(r => r.json())
      .then(() => removeBookFromState(id)      )
  }
  
  return (
      <div className="card">
        <li>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Published: {book.year}</p>
          <img src={book.image} alt={book.title} width="300px" />
          <p>{book.review}</p>
          <button type="button" onClick={()=>handleDelete(book.id)} >Remove Book</button>
        </li>
      </div>
    );
}

export default BookCard;