import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface INewsState {
  news: string[];
}


const initialState: INewsState  = {
  news: [],
}


export const getAsyncNews: any = createAsyncThunk(
  'getAsyncNews',

  async () => {
    const responce = await fetch('http://localhost:5000/api/v1/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await responce.json();
    return data;
  }

)


const newsSlice = createSlice({
  'name': 'newsSlice',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAsyncNews.fulfilled, (state, action)  =>  {
      state.news = action.payload;
    })
  }
})

export default newsSlice.reducer;