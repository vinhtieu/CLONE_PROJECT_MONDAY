import { configureStore } from "@reduxjs/toolkit";

import { surveyPageSlice, customTableSlice } from "./slices";

export const store = configureStore({
  reducer: {
    surveyPage: surveyPageSlice,
    customTable: customTableSlice,
  },
});
