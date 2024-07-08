import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import categoryReducer from './features/categorySlice';
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
