import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",

  async () => {
    const response = await fetch(
      "https://lachetaloc.onrender.com/api/public/getAllLocation"
    );
    const data = await response.json();
    return data;
  }
);

const locationsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchLocations.fulfilled, (state, action) => {
    return {
      ...state,
      locations: action.payload,
    };
  });
});

export default locationsReducer;
