import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  followed: [],
};

export const fetchFollowed = createAsyncThunk(
  "followed/fetchFollowed",

  async () => {
    const response = await fetch("http://localhost:3000/follows", {
      headers: {
        Authorization: `Bearer ${token}`,
        Origin: "http://localhost:5173",
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
