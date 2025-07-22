import React from 'react';
import './App.css';
import TodoForm from './components/todosForm';
import TodoList from './components/todosList';

const App = () => {
  return (
    <div className="App">
      <h1>To do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
