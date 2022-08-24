import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import categorySlice from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    authentication:authSlice,
    categories: categorySlice
  }
})

export default store