import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo,clearEditingTodo } from '../features/todosSlice';
import ConfirmModal from '../modals/editButtonModal';



const TodoForm = () => {
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const editingTodo = useSelector(state => state.todos.editingTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editingTodo) {
      setShowModal(true);
      // dispatch(editTodo({ id: editingTodo.id, newText: input }));
    } else {
      dispatch(addTodo(input));
      setInput('');
    }
  };

    const handleConfirmSave = () => {
      dispatch(editTodo({id: editingTodo.id, newText: input}));
      dispatch(clearEditingTodo());
      setInput('');
      setShowModal(false);
    };


  const handleCancel = () => {
    dispatch(clearEditingTodo());
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={editingTodo ? "Edit todo..." : "Add a new todo..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{editingTodo ? "Save" : "Add"}</button>
      {editingTodo && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>

    <ConfirmModal
  open={showModal}
  onConfirm={handleConfirmSave}
  onCancel={() => setShowModal(false)}
/>
    </>
  );
};
export default TodoForm;