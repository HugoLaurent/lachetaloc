import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const alertLogin = createSlice({
  name: "alertLogin",
  initialState,
  reducers: {
    toggleAlertModal: (state) => {
      state.value = !state.value; // Inverse la valeur actuelle de false à true ou vice versa
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { toggleAlertModal } = alertLogin.actions;

export default alertLogin;
