import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { redditFeed } from "../../util/Reddit";

export const generateFeed = createAsyncThunk(
  "feed/generateFeed",
  async (_, thunkAPI) => {
    const feed = await redditFeed();
    return feed;
  }
)

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feedIsLoading: false,
    feedFailedToLoad: false,
    posts: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateFeed.pending, (state) => {
        state.feedIsLoading = true;
        state.feedFailedToLoad = false;
      })
      .addCase(generateFeed.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.feedIsLoading = false;
        state.feedFailedToLoad = false;
      })
      .addCase(generateFeed.rejected, (state) => {
        state.feedIsLoading = false;
        state.feedFailedToLoad = true;
      })
    }
})

export const selectPosts = (state) => state.feed.posts;
export const feedIsLoading = (state) => state.feed.feedIsLoading;
export const feedFailedToLoad = (state) => state.feed.feedFailedToLoad;
export default feedSlice.reducer;