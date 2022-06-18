import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const GroupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup: (state, { payload }) => {
      state.groups = [...state.groups, payload];
    },
    deleteGroup: (state, { payload }) => {
      state.groups = [...state.groups.filter((group) => group.id !== payload)];
    },
    editGroup: (state, { payload }) => {
      state.groups = [
        ...state.groups.map((group) => {
          if (group.id === payload.id) {
            group.name = payload.name;
          }

          return group;
        }),
      ];
    },

    addTodo: (state, { payload }) => {
      state.groups = [
        ...state.groups.map((group) => {
          if (group.id === payload.id) {
            group.todos = [...group.todos, payload.todo];
          }
          return group;
        }),
      ];
    },
    deleteTodo: (state, { payload }) => {
      state.groups = [
        ...state.groups.map((group) => {
          if (group.id === payload.id) {
            group.todos = [
              ...group.todos.filter((item) => item.id !== payload.todo.id),
            ];
          }

          return group;
        }),
      ];
    },
    updateTodo: (state, { payload }) => {
      state.groups = [
        ...state.groups.map((group) => {
          if (group.id === payload.id) {
            group.todos = [
              ...group.todos.map((item) => {
                if (item.id === payload.todo.id) {
                  item.name = payload.todo.name;
                }
                return item;
              }),
            ];
          }

          return group;
        }),
      ];
    },
  },
});
export const {
  addGroup,
  deleteGroup,
  editGroup,
  addTodo,
  deleteTodo,
  updateTodo,
} = GroupSlice.actions;
export default GroupSlice.reducer;
