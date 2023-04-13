import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LogState {
  alert: { message: string; className: string };
}

const initialState: LogState = {
  alert: { message: "", className: "d-none" },
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<LogState["alert"]>) => {
      state.alert = action.payload;
    },
    clearAlert: state => {
      state.alert = { message: "", className: "d-none" };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert, clearAlert } = logSlice.actions;

export default logSlice.reducer;
