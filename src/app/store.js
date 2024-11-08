import { configureStore } from "@reduxjs/toolkit";
import countersReducers from "../features/counters/counterSlice";
import postsReducers from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: countersReducers,
    posts: postsReducers,
  },
});

export default store;
