import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface INews {
  id: number,
  title: string,
  lead: string,
  author: string
  date: string
  video: string
  text_1: string | null
  image_1: string | null
  comment_1: string | null
  text_2: string | null
  comment_2: string | null
  text_3: string | null
  image_3: string | null
  comment_3: string | null
  text_4: string | null
  comment_4: string | null
  text_5: string | null
  comment_5: string | null
  text_6: string | null
  image_6: string | null
  comment_6: string | null
  text_7: string | null
  image_7: string | null
  comment_7: string | null
  text_8: string | null
  image_8: string | null
  comment_8: string | null
  text_9: string | null
  image_9: string | null
  comment_9: string | null
  text_10: string | null
  image_10: string | null
  comment_10: string | null
}


interface initialState {
  news: INews[]
}

const initialState: initialState = {
  news: []
}


// async

const getAsyncNews = createAsyncThunk(
  'getAsyncNews',
  async () => {
    const response = await fetch('http://localhost:9000/api/v1/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
    return data
  }
)


const newsSlice = createSlice({
  'name': 'news',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAsyncNews.fulfilled, (state, action) => {
      state.news = action.payload
    })
  }
})

export default newsSlice.reducer