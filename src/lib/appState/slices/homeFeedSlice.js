import { createSlice } from "@reduxjs/toolkit"

const homeFeedSlice = createSlice({
  name: "homeFeed",
  initialState: {
    feedPosts: [],
    newPostsCount: 0,
    newPostsBuffer: [],
  },
  reducers: {
    initHomeFeed: (state, action) => {
      state.feedPosts = action.payload
    },
    provideNewPostsBuffer: (state, action) => {
      const updated = [...action.payload, ...state.newPostsBuffer]
      state.newPostsBuffer = updated
      state.newPostsCount = updated.length
    },
    consumeNewPostsBuffer: (state) => {
      state.feedPosts = [...state.newPostsBuffer, ...state.feedPosts]
      state.newPostsBuffer = []
      state.newPostsCount = 0
    },
    appendOldPosts: (state, action) => {
      const updated = [...state.feedPosts, ...action.payload]
      state.feedPosts = updated
    }
  },
})

export const { initHomeFeed, provideNewPostsBuffer, consumeNewPostsBuffer } = homeFeedSlice.actions

export default homeFeedSlice
