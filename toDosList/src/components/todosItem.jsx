import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../features/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing){
      dispatch(editTodo({ id: todo.id, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem