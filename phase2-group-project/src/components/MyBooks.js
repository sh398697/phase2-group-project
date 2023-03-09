import React from "react";
import BookCard from "./BookCard";

function MyBooks({books, currentUser, returnBook, removeBookFromState, checkOutBook}) {
    
    const myBooks = books.filter(book => {
        if (book.owner === currentUser && currentUser !== "") {
            return book;
        } else {
            return false;
        }
    })

    const bookList = myBooks.map(book => {
        return (<BookCard key={book.id} book={book} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} isMyBooks={true} handleReturnBookClick={handleReturnBookClick}/>)
    })

    function handleReturnBookClick(book) {
        returnBook(book);
    }

    return (
    <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <div><h1 className="font-bold text-2xl">My Books</h1></div>
        { (myBooks.length > 0) ? (
            <div>
                <div>Your checked out books:</div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">{bookList}</div>
            </div>
          ) : (
            <div>You have no books checked out</div>
          )}
    </div>
  );
}

export default MyBooks;