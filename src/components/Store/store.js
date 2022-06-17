import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import GroupSlice from "../GroupSlice/GroupSlice";

export const store = configureStore({
  reducer: {
    group: GroupSlice,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
