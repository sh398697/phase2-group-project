import React from "react";
import ReactDOM from 'react-dom/client';
import { Route } from "react-router-dom";

function About() {
  return (
    <Route path="/about">
        <header>
            <h1>This is our About page!</h1>
        </header>
    </Route>
  );
}

export default About;