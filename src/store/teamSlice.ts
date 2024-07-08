import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";





interface initialState {
  teams: [];
}


const initialState: initialState = {
  teams: [],
}


// async thunk

export const getAsyncTeams = createAsyncThunk(
  'getAsyncTeam',

  async () => {


    try {
      const responce = await fetch('http://localhost:9000/api/v1/team', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })

      if (!responce.ok)  {
        return []
      }

      const data = await responce.json()
      console.log(data)
      return data
      
    } catch (error) {
      console.log(error)
    }



  }
)



const teamSlice = createSlice({
  'name': 'team',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAsyncTeams.fulfilled, (state, action)  =>  {
      state.teams = action.payload
    })

  }
})

export default teamSlice.reducer