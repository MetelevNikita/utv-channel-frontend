import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface ProgramSliceState {
  program: any[];
}


const initialState: ProgramSliceState = {
  program: [],
}


export const getAsyncProgram = createAsyncThunk(
  'getAsyncProgram',

  async () => {
    const responce = await fetch(`https://utvchannel.tw1.su/api/v1/program`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if(!responce.ok) {
      new Error('Ошибка запроса из базы данных');
      return []
    }

    const data = await responce.json();
    return data;
  }
)



const programSlice = createSlice({
  'name':'programSlice',
  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder.addCase(getAsyncProgram.pending, (state) => {
      state.program = [];
    })

    builder.addCase(getAsyncProgram.fulfilled, (state, action) => {
      state.program = action.payload;
    })

    builder.addCase(getAsyncProgram.rejected, (state, action) => {
      console.log(action.error);
      state.program = [];
    })

  }
})


export default programSlice.reducer;