import React from 'react';

const TodoCounter = ({ todos }) => {
  const completedTodos = todos.filter(todo => todo.completed).length;
  const remainingTodos = todos.length - completedTodos;

  return (
    <p>
      {completedTodos} completed, {remainingTodos} remaining
    </p>
  );
};

export default TodoCounter;