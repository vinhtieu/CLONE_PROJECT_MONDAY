import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uniqueIdList: [],
};

const uniqueIdListSlice = createSlice({
  name: "uniqueIdList",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.uniqueIdList.push(action.payload);
    },
  },
});

export const { addId } = uniqueIdListSlice.actions;

export default uniqueIdListSlice.reducer;
