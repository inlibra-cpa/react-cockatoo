import React from 'react';
//Import components
import Todo from './Todo';

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo text={todo.text} />
        ))}      
      </ul>
    </div>
  );
};

export default ToDoList;