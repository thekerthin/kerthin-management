import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { findTemplates } from "./thunks";

export const templateAdapter = createEntityAdapter();

const initialState = templateAdapter.getInitialState({
  status: "none",
  error: null,
});

export default createSlice({
  name: "templates",
  initialState,
  reducers: {},
  extraReducers: {
    [findTemplates.fulfilled]: templateAdapter.upsertMany,
  },
});
