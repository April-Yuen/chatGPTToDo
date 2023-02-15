
import React from 'react';

const TodoList = (props) => {
  return <ul className="list-group">{props.children}</ul>;
};

export default TodoList;
