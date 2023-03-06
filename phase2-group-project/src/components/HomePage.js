import React from "react";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";
import Search from "./Search";
import './App.css';

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