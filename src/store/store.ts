import { configureStore } from "@reduxjs/toolkit";

// reducers

import teamSlice from "./teamSlice";
import projectSlice from "./projectSlice";
import newsSlice from "./newsSlice";
import programSlice from "./programSlice";
import epgSlice from "./epgSlice";






const store = configureStore({
  reducer: {
    team: teamSlice,
    project: projectSlice,
    news: newsSlice,
    program: programSlice,
    epg: epgSlice
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;