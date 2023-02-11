import React from 'react'


const Form = () => {
    //place for js code and functions
    const inputTextHandler = (e) => {
        console.log(e.target.value);
    };
    return(
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Finished</option>
          <option value="uncompleted">In Progress</option>
        </select>
      </div>
    </form>
    );
};

export default Form;