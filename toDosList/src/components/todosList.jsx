import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todosItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
const editingTodo = useSelector((state) => state.todos.editingTodo);

  if (todos.length === 0) return <p>Write your to dos!</p>;

  return (
    <ol style={{ opacity: editingTodo ? 0.5 : 1, pointerEvents: editingTodo ? 'none' : 'auto' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  );
};

export default TodoList;
