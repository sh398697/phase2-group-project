import React from "react";

function MyBooks({books, currentUser, returnBook}) {
    
    const myBooks = books.filter(book => {
        if (book.owner === currentUser && currentUser !== "") {
            return book;
        } else {
            return false;
        }
    })

    const bookList = myBooks.map(book => {
        return (
            <div key={book.id}>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.title}</span>
                <button onClick={() => handleReturnBookClick(book)}>Return Book</button>
            </div>
        )
    })

    function handleReturnBookClick(book) {
        returnBook(book);
    }


    return (
    <div>
        <h1>My Books</h1>
        { (myBooks) ? (
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