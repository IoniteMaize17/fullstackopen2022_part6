import { createSlice } from '@reduxjs/toolkit'
import { anecdoteService } from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecDote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      const newObj = action.payload
      return state.map(anecdote =>
        anecdote.id !== newObj.id ? anecdote : newObj 
      )     
    }
  },
})

export const { setAnecdotes, appendAnecDote, updateAnecdote } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}
export const createAnecDote = content => {
  return async dispatch => {
    const newAnecDot = await anecdoteService.createNew(content)
    dispatch(appendAnecDote(newAnecDot))
  }
}
export const voteAnecdote = obj => {
  return async dispatch => {
    const newObj = {
      ...obj,
      votes: obj.votes + 1
    }
    delete newObj.id
    const updateObj = await anecdoteService.update(obj.id, newObj)
    dispatch(updateAnecdote(updateObj))
  }
}
export default anecdoteSlice.reducer