import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//


const readPostUrl = 'http://localhost:5000/api/v1/news'



export const readPostAsync : any = createAsyncThunk(
  'readPostAsync',
  async () => {
    const responce = await fetch(readPostUrl)
    const data = await responce.json();
    return data
  }
)


interface readPostSlice {
  post: any[]
}


const initialState:readPostSlice = {
  post:[]
}


const readPostSlice = createSlice({
  "name": "readPost",
  initialState,


  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(readPostAsync.fulfilled, (state, action)  =>  {
      state.post = action.payload
    })
  }

})


export default readPostSlice.reducer