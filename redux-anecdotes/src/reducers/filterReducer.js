import { createSlice } from '@reduxjs/toolkit'

const initialState = { content: '' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    pushContent(state, action) {
      const content = action.payload
      state.content = content
    },
  },
})

export const { pushContent } = filterSlice.actions
export default filterSlice.reducer