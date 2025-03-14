import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// types


import { teamType } from "../types/types";





interface initialState {
  teams: teamType[];
}


const initialState: initialState = {
  teams: [],
}


// async thunk

export const getAsyncTeams = createAsyncThunk(
  'getAsyncTeam',

  async () => {


    try {
      const responce = await fetch(`https://utvchannel.tw1.su/api/v1/team`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })

      if(!responce.ok) {
        new Error('Ошибка запроса из базы данных');
        return []
      }

      const data = await responce.json()
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

    builder.addCase(getAsyncTeams.pending, (state) => {
      state.teams = []
    })


    builder.addCase(getAsyncTeams.fulfilled, (state, action)  =>  {
      state.teams = action.payload
    })


    builder.addCase(getAsyncTeams.rejected, (state, action) => {
      console.log(action.error)
      state.teams = []
    })

  }
})

export default teamSlice.reducer