"use client";
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "../components/interactive/playerSlice";
import layoutReducer from "../components/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch