import { current } from "@reduxjs/toolkit";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Theme =  {
  textColor: "text-white",
  backgroundColor: "bg-black",
}

type Theme = {
  textColor: string,
  backgroundColor: string,
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.backgroundColor = action.payload.backgroundColor
      state.textColor = action.payload.textColor
    },
    resetTheme: (state) => {
      state = initialState
    }
  }
})

export const { setTheme, resetTheme } = layoutSlice.actions

export default layoutSlice.reducer