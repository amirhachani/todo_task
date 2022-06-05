import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
