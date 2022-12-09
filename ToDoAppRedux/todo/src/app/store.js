import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../todoReducer";
import x from "../todoReducer"

export const store = configureStore({
  reducer:{
    todo: todoReducer,
    todo:x
  }
});