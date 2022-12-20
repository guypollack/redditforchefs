import { createSlice } from "@reduxjs/toolkit";

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    currentSubreddit: "https://www.reddit.com/r/FoodHacks.json",
    subredditUrls: {
      foodhacks: "https://www.reddit.com/r/FoodHacks.json",
      cooking: "https://www.reddit.com/r/Cooking.json",
      chefs: "https://www.reddit.com/r/Chefs.json",
      vegan: "https://www.reddit.com/r/Vegan.json",
      chefknives: "https://www.reddit.com/r/ChefKnives.json"
    },
    subredditLogos: {
      foodhacks: "../../../reddit-icon.png",
      cooking: "../../../reddit-icon.png",
      chefs: "../../../reddit-icon.png",
      vegan: "../../../vegan-icon.png",
      chefknives: "../../../chefknives-icon.png"
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
export const selectSubredditLogos = (state) => state.subreddits.subredditLogos;
export default subredditsSlice.reducer;