import { createSlice } from "@reduxjs/toolkit"

const homeFeedSlice = createSlice({
  name: "home_feed",
  initialState: {
    feedPosts: [],
    newPostsCount: 0,
    newPostsBuffer: [],
  },
  reducers: {
    supplyFeed: ({ feedPosts }, action) => {},
    supplyBuffer: ({ newPostsBuffer }, action) => {},
    setCount: ({ newPostsCount }, action) => {},
  },
})

export const { supplyFeed, supplyBuffer, setCount } = homeFeedSlice.actions

export default homeFeedSlice
