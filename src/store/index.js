import { configureStore } from "@reduxjs/toolkit";
import authentication from '../features/auth/authentication'
import categorySlice from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    authentication,
    categories: categorySlice
  }
})

export default store