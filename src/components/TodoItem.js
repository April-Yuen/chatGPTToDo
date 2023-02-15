import React from 'react';

const TodoItem = (props) => {
  const { todo, handleCompleted, removeTodo } = props;

  return (
    <li key={todo.id} className="list-group-item">
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => handleCompleted(todo.id)}
      />
      {todo.text}{' '}
      <button
        className="btn btn-danger btn-sm float-right"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;