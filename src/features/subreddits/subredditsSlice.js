import { createSlice } from "@reduxjs/toolkit";

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    currentSubreddit: "chefknives",
    subredditUrls: {
      chefknives: "https://www.reddit.com/r/ChefKnives.json",
      cooking: "https://www.reddit.com/r/Cooking.json"
    }
  },
  reducers: {
    changeSubreddit(state, action) {
      state.currentSubreddit = action.payload;
    }
  }
})

export const { changeSubreddit } = subredditsSlice.actions;
export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;
export const selectSubredditUrls = (state) => state.subreddits.subredditUrls;
export default subredditsSlice.reducer;