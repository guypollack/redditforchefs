import { createAsyncThunk } from "@reduxjs/toolkit";

export const generateFeed = createAsyncThunk(
  "feed/generateFeed",
  async (_, thunkAPI) => {
    // const data = await fetch("https://api.spotify.com/v1/search?q=cher&type=artist"); //- used as an test to trigger 401 error
    const data = await fetch("https://www.reddit.com/r/funny.json");
    if (!data.ok) {
      return thunkAPI.rejectWithValue(data);
    }
    const json = await data.json();
    const posts = await json.data.children.map(post => post.data)
    return posts;
  }
)