import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getAsyncEpg = createAsyncThunk(
  'getAsyncEpg',

  async () => {
    try {

      const responce = await fetch('http://localhost:9000/api/v1/epg', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (responce.ok) {
        const data = await responce.json()
        return data
      }

    } catch (error) {
      console.log(error)
    }
  }
)



interface inititalState {
  epg: [];
}

const initialState: inititalState = {
  epg: [],
}


const epgSlice = createSlice({
  'name': 'epg',
  initialState,

  reducers: {},

  extraReducers(builder) {

    builder.addCase(getAsyncEpg.fulfilled, (state, action) => {
      state.epg = action.payload
    })

  },

})

export default epgSlice.reducer