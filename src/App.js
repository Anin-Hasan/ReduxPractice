// src/App.js
import React from "react";
import "./App.css";
import Counter from "../src/components/Counter";
import PostsArea from "./components/PostsArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter id={1} />
        <Counter id={2} />
      </header>
      <PostsArea />
    </div>
  );
}

export default App;
