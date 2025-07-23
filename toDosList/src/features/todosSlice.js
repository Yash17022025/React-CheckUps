import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === id) {
          state.todos[i].text = newText;
          break;
        }
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
