import React from "react";
import NewBookForm from "./NewBookForm";
import Search from "./Search";
import BookList from "./BookList";

function App() {
  return (
      <div className="homePage">
        <NewBookForm />
        <Search />
        <BookList />
      </div>
    );
 
}

export default App;