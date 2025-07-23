import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, setEditingTodo } from '../features/todosSlice'
import DeleteModal from '../modals/deleteButtonModal'
import { useState } from 'react';

const TodoItem = ({ todo, isEditing }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
        if (!isEditing) {
      dispatch(setEditingTodo(todo));
    }
  };

    return (
        <>
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
        disabled={isEditing}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleEdit} disabled={isEditing} >Edit</button>
      <button onClick={() => setOpen(true)} disabled={isEditing}>Delete</button>
    </li>

    <DeleteModal todo={todo} open={open} setOpen={setOpen}/>
    </>
  );
};

export default TodoItem;