import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedReducer from "../features/feed/feedSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feed: feedReducer,
    subreddits: subredditsReducer
  },
});
