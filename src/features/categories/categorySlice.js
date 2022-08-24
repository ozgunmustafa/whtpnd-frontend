import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import CategoryService from '../../services/CategoryService'

const initialState = {
  data: null,
  loading: false,
  error: ''
}

export const getAllCategories = createAsyncThunk(
  'getAllCategories',
  async () => {
    const res = await CategoryService.getAllCategories()
    return res.data
  }
)
export const getFeaturedCategories = createAsyncThunk(
  'getFeaturedCategories',
  async () => {
    const res = await CategoryService.getFeaturedCategories()
    return res.data;
  }
)

export const followCategory = createAsyncThunk('followCategory', async (id) => {
  const res = await CategoryService.followCategory(id)
  return res.data
})
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while get categories'
      })
      .addCase(getFeaturedCategories.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(getFeaturedCategories.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(getFeaturedCategories.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while get categories'
      })
      .addCase(followCategory.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(followCategory.fulfilled, (state, action) => {
        console.log('follow clicked', action)
        state.loading = false
        state.error = ''
      })
      .addCase(followCategory.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while get categories'
      })
  }
})

export default categorySlice.reducer
