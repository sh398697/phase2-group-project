import React from "react";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";
import Search from "./Search";

function HomePage() {
  return (
      <div className="homePage">
        <NewBookForm />
        <Search />
        <BookList />
      </div>
    );
 
}

export default HomePage;