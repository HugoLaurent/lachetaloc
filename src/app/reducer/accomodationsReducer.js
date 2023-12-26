import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  accomodations: [],
  isLoading: false,
};

export const fetchAccomodation = createAsyncThunk(
  "accomodations/fetchAccomodation",

  async () => {
    const response = await fetch(
      "https://lachetaloc.onrender.com/public/allAccomodation"
    );
    const data = await response.json();
    return data;
  }
);

const accomodationsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAccomodation.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    .addCase(fetchAccomodation.fulfilled, (state, action) => {
      return {
        ...state,
        accomodations: action.payload,
        isLoading: false,
      };
    });
});

export default accomodationsReducer;
