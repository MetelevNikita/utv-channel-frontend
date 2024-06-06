import { configureStore } from "@reduxjs/toolkit";

//

import readPostSlice from "./readPostSlice";
import newsSlice from "./newsSlice";


const store = configureStore({
  reducer: {
    readPost: readPostSlice,
    news: newsSlice
  }
})


export default store;