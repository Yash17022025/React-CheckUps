import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todosItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0) return <p>Write your to dos!</p>;

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  );
};

export default TodoList;
