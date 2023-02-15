import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React.js', completed: false },
    { id: 2, text: 'Build a to-do list app', completed: false },
    { id: 3, text: 'Publish the app', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: todos.length + 1, text, completed: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <div className="container">
        <h1 className="text-center my-5">My To-Do List</h1>
        <TodoCounter todos={todos} />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleted={handleCompleted}
              removeTodo={removeTodo}
            />
          ))}
        </TodoList>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
};

export default App;

