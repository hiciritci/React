import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector,useDispatch } from "react-redux";
import todoSlice from "../features/todoSlice";

const store=configureStore({
    reducer:{
        todos:todoSlice,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch;

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;
