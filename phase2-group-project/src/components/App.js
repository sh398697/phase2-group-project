import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import '../App.css';
import Search from "./Search";

function App() {
  return (
    <div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/books">
        <HomePage />
      </Route>
    </div>
    );
}

export default App;
