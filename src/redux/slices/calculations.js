import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "",
  firstNum: "",
  secondNum: "",
  operator: "",
};

export const calculationsSlice = createSlice({
  name: "calculations",
  initialState,
  reducers: {
    setDisplayValue: (state, action) => {
      state.displayValue = action.payload;
    },
    setFirstNum: (state, action) => {
      state.firstNum = action.payload;
    },
    setSecondNum: (state, action) => {
      state.secondNum = action.payload;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
    },
  },
});

export const { setDisplayValue, setFirstNum, setSecondNum, setOperator } =
  calculationsSlice.actions;

export default calculationsSlice.reducer;
