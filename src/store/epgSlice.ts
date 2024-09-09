import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getAsyncEpg = createAsyncThunk(
  'getAsyncEpg',

  async () => {
    try {

      const responce = await fetch(`${process.env.REACT_APP_API_URL}/epg`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (responce.ok) {
        const data = await responce.json()
        console.log(data)
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