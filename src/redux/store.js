import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import futbolinesReducer from "./slices/futbolinesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    futbolines: futbolinesReducer,
  },
});

export default store;