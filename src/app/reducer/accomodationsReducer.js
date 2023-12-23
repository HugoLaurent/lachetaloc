import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  accomodations: [],
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
  builder.addCase(fetchAccomodation.fulfilled, (state, action) => {
    return {
      ...state,
      accomodations: action.payload,
    };
  });
});

export default accomodationsReducer;
