import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const Home = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg flex-grow"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 rounded-lg ml-2"
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
