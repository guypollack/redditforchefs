import { createSlice } from "@reduxjs/toolkit";

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    currentSubreddit: "https://www.reddit.com/r/ChefKnives.json",
    subredditUrls: {
      chefknives: "https://www.reddit.com/r/ChefKnives.json",
      cooking: "https://www.reddit.com/r/Cooking.json",
      chefs: "https://www.reddit.com/r/Chefs.json",
      foodhacks: "https://www.reddit.com/r/FoodHacks.json"
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