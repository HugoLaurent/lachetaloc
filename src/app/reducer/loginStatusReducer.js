import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLog: false,
};

const loginStatusReducer = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.isLog = !state.isLog;
    },
  },
});

export const { changeStatus } = loginStatusReducer.actions;

export default loginStatusReducer;
