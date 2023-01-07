import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 100,
    message: 'hello world'
  },
  reducers: {
    addCountAction(state, { payload }) {
      state.count += payload
    }
  }
})

export const { addCountAction } = countSlice.actions
export default countSlice.reducer
