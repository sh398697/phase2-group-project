import React from "react";

function MyBooks({books, currentUser, returnBook}) {
  
    const myBooks = books.filter(book => {
        if (book.owner === currentUser && currentUser != "") {
            return book;
        } else {
            return false;
        }
    })

    function handleReturnBookClick(book) {
        console.log(book);
        returnBook(book);
    }

    const bookList = myBooks.map(book => {
        return (
            <div key={book.id}>
                <div>{book.title}</div>
                <button onClick={() => handleReturnBookClick(book)}>Return Book</button>
            </div>
        )
    })


    return (
    <div>
        <h1>My Books</h1>
        
        { (myBooks.length > 0) ? (
            <div>
                <div>Your checked out books:</div>
                <div>{bookList}</div>
            </div>
          ) : (
            <div>You have no books checked out</div>
          )}
    </div>
  );
}

export default MyBooks;