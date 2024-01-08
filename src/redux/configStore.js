import { configureStore } from "@reduxjs/toolkit";

import { surveyPageSlice } from "./slices";

export const store = configureStore({
  reducer: {
    surveyPage: surveyPageSlice,
  },
});
