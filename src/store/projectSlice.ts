import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// types

import { projectTypeCard } from "../types/types";


interface initialState {
  project: projectTypeCard[]
}


const initialState: initialState = {
  project: []
}


// async thunk

export const getAsyncProject = createAsyncThunk(
  'getAsyncProject',

  async () => {

    try {

      const responce = await fetch('http://localhost:9000/api/v1/project')

      const data = await responce.json()
      console.log(data)
      return data

    } catch (error) {
      console.log(error)
    }
  }
)




const projectSlice = createSlice({
  'name': 'team',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAsyncProject.fulfilled, (state, action)  =>  {
      state.project = action.payload
    })

  }
})


export default projectSlice.reducer

