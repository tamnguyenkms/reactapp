import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default hot(module)(App);
