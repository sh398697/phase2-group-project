import React from "react";

function MyBooks({books, currentUser}) {
  
    const myBooks = books.filter(book => {
        if (book.owner === currentUser && currentUser != "") {
            return book;
        } else {
            return false;
        }
    })

    console.log("Current user:")
    console.log(currentUser)
    console.log(myBooks)

    const bookList = myBooks.map(book => {
        return <div>{book.title}</div>
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