import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '../../services/UserService'

const initialState = {
  data: null,
  loading: false,
  error: ''
}

export const registerUser = createAsyncThunk(
  'registerUser',
  async ({ name, email, password }) => {
    const res = await UserService.registerUser({ name, email, password })
    return res.data
  }
)
export const loginUser = createAsyncThunk(
  'loginUser',
  async ({ email, password }) => {
    const res = await UserService.loginUser({ email, password })
    localStorage.setItem('token', res.data.access_token)
    //console.log(res.data)
    localStorage.setItem('access_token', res.data.access_token)
    localStorage.setItem('userId', res.data.data.id)
    return res.data
  }
)
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while registering'
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while login'
      })
  }
})

export default authSlice.reducer
