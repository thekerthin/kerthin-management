import { createSlice } from "@reduxjs/toolkit";

import { findTemplates } from "./thunks";

const initialState = {
  data: [],
  status: "none",
  error: null,
};

export default createSlice({
  name: "templates",
  initialState,
  reducers: {},
  extraReducers: {
    [findTemplates.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
  },
});
