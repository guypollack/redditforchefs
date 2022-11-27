import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateFeed } from "../../util/Reddit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feedIsLoading: false,
    feedFailedToLoad: false,
    errorStatus: null,
    posts: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateFeed.pending, (state) => {
        state.feedIsLoading = true;
        state.feedFailedToLoad = false;
        state.errorStatus = null;
      })
      .addCase(generateFeed.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.feedIsLoading = false;
        state.feedFailedToLoad = false;
        state.errorStatus = null;
      })
      .addCase(generateFeed.rejected, (state, action) => {
        state.feedIsLoading = false;
        state.feedFailedToLoad = true;
        state.errorStatus = action.payload.status;
      })
    }
})

export const selectPosts = (state) => state.feed.posts;
export const feedIsLoading = (state) => state.feed.feedIsLoading;
export const feedFailedToLoad = (state) => state.feed.feedFailedToLoad;
export const errorStatus = (state) => state.feed.errorStatus;
export default feedSlice.reducer;