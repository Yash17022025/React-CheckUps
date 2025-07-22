import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editingTodo: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      console.log(newTodo);
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todoId = action.payload;
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === todoId) {
          state.todos[i].completed = !state.todos[i].completed;
          break;
        }
      }
    },
    deleteTodo: (state, action) => {
      const todoIdToDelete = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoIdToDelete);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
      state.editingTodo = null;
    },

    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },

    clearEditingTodo: (state) => {
      state.editingTodo = null;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo,
  setEditingTodo,
  clearEditingTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
