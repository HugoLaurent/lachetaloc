import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");

const initialState = {
  user: [],
};

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (token) => {
    console.log("passage dans le thunk");
    const decryptedToken = jwtDecode(token);

    const response = await fetch(
      `https://lachetaloc.onrender.com/users/${decryptedToken.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const logout = createAction("user/logout");

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
    console.log("passage dans le reducer");
    return {
      ...state,
      user: action.payload,
    };
  });
  builder.addCase(logout, (state) => {
    console.log("logout");
    return {
      ...state,
      user: [],
    };
  });
});

export default userReducer;
