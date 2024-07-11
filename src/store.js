import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import categoryReducer from './features/categorySlice';
import productReducer from './features/productSlice';
import todoReducer from './features/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    product: productReducer,
    todo: todoReducer,
  },
});

export default store;
