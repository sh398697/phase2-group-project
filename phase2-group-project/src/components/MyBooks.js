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
        return (<BookCard key={book.id} book={book} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} isMyBooks={true} handleReturnBookClick={handleReturnBookClick}/>
            
            
            /*
            <div key={book.id}>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.title}</span>
                <button onClick={() => handleReturnBookClick(book)}>Return Book</button>
            </div>
            */
        )
    })

    function handleReturnBookClick(book) {
        returnBook(book);
    }

    return (
    <div className="flex justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <h1 className="font-bold">My Books</h1>
        { (myBooks) ? (
            <div>
                <div>Your checked out books:</div>
                <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-4 lg:gap-1">{bookList}</div>
            </div>
          ) : (
            <div>You have no books checked out</div>
          )}
    </div>
  );
}

export default MyBooks;