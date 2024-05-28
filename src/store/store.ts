import { configureStore } from "@reduxjs/toolkit";

//

import readPostSlice from "./readPostSlice";


const store = configureStore({
  reducer: {
    readPost: readPostSlice
  }
})


export default store;