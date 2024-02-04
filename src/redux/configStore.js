import { configureStore } from "@reduxjs/toolkit";

import { surveyPageSlice, previewTableSlice } from "./slices";

export const store = configureStore({
  reducer: {
    surveyPage: surveyPageSlice,
    previewTable: previewTableSlice,
  },
});
