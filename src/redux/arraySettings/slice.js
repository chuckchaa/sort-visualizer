import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
  arrayLength: 30,
}

const arraySettingsSlice = createSlice({
  name: 'arraySettings',
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload
    },
    setArrayLength: (state, action) => {
      state.arrayLength = action.payload
    },
  },
})

export const { setArray, setArrayLength } = arraySettingsSlice.actions

export default arraySettingsSlice.reducer
