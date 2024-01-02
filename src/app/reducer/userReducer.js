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
    const decryptedToken = jwtDecode(token);

    const response = await fetch(
      `https://lachetaloc.onrender.com/api/users/${decryptedToken.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const userLogout = createAction("user/userLogout");

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
    return {
      ...state,
      user: action.payload,
    };
  });
  builder.addCase(userLogout, () => {
    return initialState;
  });
});

export default userReducer;
