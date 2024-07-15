import { configureStore } from "@reduxjs/toolkit";

// reducers

import teamSlice from "./teamSlice";
import projectSlice from "./projectSlice";
import newsSlice from "./newsSlice";






const store = configureStore({
  reducer: {
    team: teamSlice,
    project: projectSlice,
    news: newsSlice
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;