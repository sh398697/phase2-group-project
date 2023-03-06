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
      <Header />
      <HomePage />
    </div>
    );
}

export default App;
