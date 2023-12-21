import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const cardModal = createSlice({
  name: "cardModal",
  initialState,
  reducers: {
    toggleValueModal: (state) => {
      state.value = !state.value; // Inverse la valeur actuelle de false à true ou vice versa
    },
  },
});

export const { toggleValueModal } = cardModal.actions;

export default cardModal;
