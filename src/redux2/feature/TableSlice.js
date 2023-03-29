import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    insertTable(state, action) {
      return action.payload ? action.payload : { table: {} };
    },
  },
});

export const { insertTable } = tableSlice.actions;
export default tableSlice.reducer;
