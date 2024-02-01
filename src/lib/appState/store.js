import { configureStore } from "@reduxjs/toolkit"

import homeFeedSlice from "./slices/homeFeedSlice.js"

export default configureStore({
  reducer: {
    home_feed: homeFeedSlice.reducer,
  },
})
