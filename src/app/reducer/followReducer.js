import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

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

export const deleteFollow = createAsyncThunk(
  "followed/deleteFollow",

  async (id) => {
    await fetch(`https://lachetaloc.onrender.com/follows/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

export const followLogout = createAction("followed/followLogout");

const followReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchFollowed.fulfilled, (state, action) => {
    return {
      ...state,
      followed: action.payload,
    };
  });
  builder.addCase(deleteFollow.fulfilled, (state, action) => {
    const deletedItemId = +action.payload;
    const updatedFollowed = state.followed.filter(
      (follow) => follow.id !== deletedItemId
    );
    return {
      ...state,
      followed: updatedFollowed,
    };
  });
  builder.addCase(followLogout, (state) => {
    return {
      ...state,
      followed: [],
    };
  });
});

export default followReducer;
