import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>
          <code>Todo List</code>
        </h1>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <ul>
        <li>Action 1</li>
      <ul>
        <li>Action 1-1</li>
        <li>Action 1-2</li>
        <li>Action 1-3</li>
      </ul>  
        <li>Action 2</li>
        <li>Action 3</li>
      </ul>
    </div>
  );
}

export default App;
