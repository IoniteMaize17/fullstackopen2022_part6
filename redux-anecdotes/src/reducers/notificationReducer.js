import { createSlice } from '@reduxjs/toolkit'

const initialState = { message: null }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification(state, action) {
      const content = action.payload
      state.message = content
    },
  },
})

let delayHandler = null;

export const { pushNotification } = notificationSlice.actions
export const setNotification = (content, time) => {
  return async dispatch => {
    if (delayHandler) clearTimeout(delayHandler)
    dispatch(pushNotification(content))
    delayHandler = setTimeout(() => {
      dispatch(pushNotification(null))
    }, time * 1000)
  }
}
export default notificationSlice.reducer