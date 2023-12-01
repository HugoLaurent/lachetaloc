import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

const openLogin = createSlice({
  name: "openLogin",
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value; // Inverse la valeur actuelle de false à true ou vice versa
    },
  },
});

export const { toggleValue } = openLogin.actions;

export default openLogin;
