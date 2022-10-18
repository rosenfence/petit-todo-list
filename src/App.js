import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import TodoMain from "./components/TodoMain";
import TodoHead from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e4e4e4;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoMain>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoMain>
    </>
  );
}

export default App;
