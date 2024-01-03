import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inProgress: false,
  sortingSpeed: 40,
  activeElements: [],
  sortedElements: [],
  auxiliaryElements: [],
}

const sortProcessSlice = createSlice({
  name: 'sortProcess',
  initialState,
  reducers: {
    reset: state => ({ ...initialState, sortingSpeed: state.sortingSpeed }),
    toggleSort: (state, action) => {
      state.inProgress = action.payload
    },
    setSortingSpeed: (state, action) => {
      state.sortingSpeed = action.payload
    },
    setActiveElements: (state, action) => {
      state.activeElements = action.payload
    },
    setAuxiliaryElements: (state, action) => {
      state.auxiliaryElements = action.payload
    },
    setSortedElements: (state, action) => {
      state.sortedElements = action.payload
    },
  },
})

export const {
  reset,
  toggleSort,
  setSortingSpeed,
  setActiveElements,
  setAuxiliaryElements,
  setSortedElements,
} = sortProcessSlice.actions

export default sortProcessSlice.reducer
