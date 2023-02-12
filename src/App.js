import React, { useState } from 'react';
import "./App.css";
//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <header>
        <h1>Inara's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
