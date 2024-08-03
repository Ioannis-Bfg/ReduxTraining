import { configureStore } from "@reduxjs/toolkit";
import calculationsReducer from "./slices/calculations";

export const store = configureStore({
  reducer: {
    calculations: calculationsReducer,
  },
});
