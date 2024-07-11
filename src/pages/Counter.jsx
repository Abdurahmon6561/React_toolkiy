// src/pages/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white shadow rounded-lg text-center">
      <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
