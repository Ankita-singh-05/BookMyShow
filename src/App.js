import React, {Component} from 'react';
import { Route } from "react-router-dom";

function Name() {
  return <h1>Hello Root</h1>
}

function Name2() {
  return <h1>Hello Movie</h1> 
}

function App() {
  return (
    <>
    {/* For updated Versions --> Route path="/" element = {<Name/>} */}
    <Route path="/" exact component = {Name} />
    <Route path="/movie" exact component = {Name2} />
    </>
  );
}

export default App;
