import React from "react";
import ReactDOM from 'react-dom/client';
import { Route } from "react-router-dom";

function About() {
  return (
    <Route path="/about">
        <div>
            <h1>This is our About page!</h1>
        </div>
    </Route>
  );
}

export default About;