import { configureStore } from "@reduxjs/toolkit";

// reducers

import teamSlice from "./teamSlice";
import projectSlice from "./projectSlice";






const store = configureStore({
  reducer: {
    team: teamSlice,
    project: projectSlice
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;