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
    const response = await fetch(
      "https://lachetaloc.onrender.com/api/follows",
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

export const resetState = createAction("followed/resetState");

export const deleteFollow = createAsyncThunk(
  "followed/deleteFollow",

  async (id) => {
    await fetch(`https://lachetaloc.onrender.com/api/follows/delete/${id}`, {
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
    console.log(action.payload, "it's me mario");
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
  builder.addCase(resetState, () => {
    console.log(initialState, "initialState");
    console.log("resetState");
    return initialState;
  });
  builder.addCase(followLogout, () => {
    return initialState;
  });
});

export default followReducer;
