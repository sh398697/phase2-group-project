import React from "react";
import { NavLink } from "react-router-dom";
function BookCard({book, removeBookFromState, currentUser, checkOutBook,}) {

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

  const isLoggedIn = currentUser;

  return (
      <div className="bg-white  p-4 rounded-lg rounded-tl-[70px]
       w-full max-w-[200px] mx-auto cursor-pointer hover:shadow-8x1 transition">
         <img className='mb-8 rounded-lg rounded-tl-[40px]'  src={book.image} alt={book.title}/>
         <div className="mbflex gap-x-1 text-xsm">
            <div className="">Title: {book.title}</div>
            <div className="">Author: {book.author}</div>
            <div className="">Genre: {book.genre}</div>
            <div className="">Published: {book.year}</div>
            <div className="font-bold text-2l px-2 pt-4">{book.review}</div>
          </div>
          {(currentUser === "admin")? (<button type="button" onClick={()=>handleDelete(book.id)}>Remove Book</button>) : (null)} 
          { book.owner ? (<div>Checked out to: {book.owner}</div>) : (null)} 
          { (isLoggedIn && !book.owner) ? (<button onClick={handleCheckOutClick}>Check Me Out</button>) : (null)}
          { (!isLoggedIn && !book.owner) ? (<button><NavLink to="/login" exact>Login to CheckOut</NavLink></button>) : (null)}
      </div>
    );
}

export default BookCard;


// max-w-[500px] mx-auto p-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14