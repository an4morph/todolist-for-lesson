import { createSlice } from '@reduxjs/toolkit'

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState: {
    form: {
      text: '',
      deadline: '',
    }
  },
  reducers: {
    changeField: (state, action) => {
      state.form = {
        ...state.form,
        [action.payload.name]: action.payload.value
      }
    }
  }
})

export const todoFormActions = todoFormSlice.actions

export default todoFormSlice.reducer