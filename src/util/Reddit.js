import { createAsyncThunk } from "@reduxjs/toolkit";

export const generateFeed = createAsyncThunk(
  "feed/generateFeed",
  async (_, thunkAPI) => {
    // const response = await fetch("https://api.spotify.com/v1/search?q=cher&type=artist"); //- used as an test to trigger 401 error
    const response = await fetch("https://www.reddit.com/r/ChefKnives.json");
    if (!response.ok) {
      return thunkAPI.rejectWithValue(response);
    }
    const json = await response.json();
    // console.log(json);
    const redditData = await json.data.children.map(child => child.data)
    // console.log(redditData);
    const posts = redditData.map(post => ({...post, showMoreText: false}));
    // console.log(posts);
    return posts;
  }
)