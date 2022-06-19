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
    setCheckGroup: (state, { payload }) => {
      state.groups = [
        ...state.groups.map((group) => {
          if (group.id === payload.id) {
            group.checked = payload.checked;
            group.todos = [
              ...group.todos.map((item) => {
                item.checked = payload.checked;
                return item;
              }),
            ];
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
    checkTodo: (state, { payload }) => {
      state.groups.map((group) => {
        if (group.id === payload.id) {
          group.todos.map((todo) => {
            if (todo.id === payload.todo.id) {
              todo.checked = payload.todo.checked;
            }
            return todo;
          });
        }
        return group;
      });
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
  setCheckGroup,
  checkTodo,
} = GroupSlice.actions;
export default GroupSlice.reducer;
