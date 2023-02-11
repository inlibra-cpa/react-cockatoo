import React, { useState } from 'react';
import "./App.css";
//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <header>
        <h1>Inara's Todo List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDoList />
      <ul>
        <li>Action 1</li>
      </ul>
    </div>
  );
}

export default App;
