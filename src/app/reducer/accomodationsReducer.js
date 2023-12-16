import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  accomodations: [],
};

export const fetchAccomodation = createAsyncThunk(
  "accomodations/fetchAccomodation",

  async () => {
    const response = await fetch(
      "http://localhost:3000/public/allAccomodation"
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
