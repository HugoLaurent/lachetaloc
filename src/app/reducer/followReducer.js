import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  followed: [],
};

export const fetchFollowed = createAsyncThunk(
  "followed/fetchFollowed",

  async () => {
    const response = await fetch("https://lachetaloc.onrender.com/follows", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

const followReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchFollowed.fulfilled, (state, action) => {
    return {
      ...state,
      followed: action.payload,
    };
  });
});

export default followReducer;
