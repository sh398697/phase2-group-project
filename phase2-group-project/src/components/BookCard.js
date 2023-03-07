import React from "react";

function BookCard({book, removeBookFromState, currentUser, checkOutBook}) {

  function handleDelete(id) {
    fetch(`http://localhost:6001/books/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(r => r.json())
      .then(() => removeBookFromState(id)      )
  }

  function handleCheckOutClick() {
    //Update book to owner=currentUser
    checkOutBook(book);
  }

  return (
      <div className="border-solid">
          <div>Title: {book.title}</div>
          <div>Author: {book.author}</div>
          <div>Genre: {book.genre}</div>
          <div>Published: {book.year}</div>
          <img src={book.image} alt={book.title} width="300px" />
          <div>{book.review}</div>
          <button type="button" onClick={()=>handleDelete(book.id)} >Remove Book</button>
          { book.owner ? (<div>Checked out to: {book.owner}</div>) : (<button onClick={handleCheckOutClick}>Check Me Out</button> )}
          <p></p>
      </div>
    );
}

export default BookCard;