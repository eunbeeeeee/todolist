import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

function TodoBoard(props) {
  const handleRemove = (index) => {
    props.onRemove(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="scroll-container">
        {props.todoList.map((item, index) => (
          <TodoItem key={index} item={item} onRemove={() => handleRemove(index)} />
        ))}
      </div>
    </div>
  );
}

export default TodoBoard;
