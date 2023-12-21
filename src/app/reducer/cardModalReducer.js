import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  id: "",
};

const cardModal = createSlice({
  name: "cardModal",
  initialState,
  reducers: {
    toggleValueModal: (state) => {
      state.value = !state.value; // Inverse la valeur actuelle de false à true ou vice versa
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { toggleValueModal, setId } = cardModal.actions;

export default cardModal;
