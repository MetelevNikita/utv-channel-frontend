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

      const responce = await fetch('http://localhost:9000/api/v1/project', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })


      if(!responce.ok) {
        new Error('Ошибка запроса из базы данных');
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




const projectSlice = createSlice({
  'name': 'team',
  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder.addCase(getAsyncProject.pending, (state) => {
      state.project = []
    })

    builder.addCase(getAsyncProject.fulfilled, (state, action)  =>  {
      state.project = action.payload
    })

    builder.addCase(getAsyncProject.rejected, (state, action) => {
      console.log(action.error)
      state.project = []
    })

  }
})


export default projectSlice.reducer

