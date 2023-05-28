import { createSlice } from "@reduxjs/toolkit";

export const NewsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    setNews: (state) => {
      state.isLoading = true
    },
    setNewsSuccess: (state, { payload }) => {
      console.log(payload)
      state.articles = payload
      state.isLoading = false
    },
    setNewsError: (state, { payload }) => {
      state.error = payload
      state.isLoading = false
    },
  }
})

export default NewsSlice.reducer
export const { setNews, setNewsSuccess, setNewsError } = NewsSlice.actions