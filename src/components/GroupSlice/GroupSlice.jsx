import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const GroupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroup: (state, { payload }) => {
      state.groups = [...state.groups, payload];
      console.log(state.groups);
    },
  },
});
export const { setGroup } = GroupSlice.actions;
export default GroupSlice.reducer;
