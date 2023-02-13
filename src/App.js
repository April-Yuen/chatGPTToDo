import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React.js" },
    { id: 2, text: "Build a to-do list app" },
    { id: 3, text: "Publish the app" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { id: todos.length + 1, text }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
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
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              {todo.text}{" "}
              <button
                className="btn btn-danger btn-sm float-right"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new to-do"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Add To-Do</button>
        </form>
      </div>
    </>
  );
};

export default TodoList;

