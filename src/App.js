// import logo from './logo.svg';
// import './App.css';

import React from "react";
import HelloWorld from "./HelloWorld";

//the App component renders JSX, including the HelloWorld component. 
//JSX elements can be nested just like HTML elements.
const App = () => {
  return (
    <div>
      <h1> Welcome to my React App</h1>
      <HelloWorld/>
    </div>
  );
};

export default App;
