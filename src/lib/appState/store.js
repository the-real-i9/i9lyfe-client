import { configureStore } from "@reduxjs/toolkit"

import homeFeedSlice from "./slices/homeFeedSlice"
import clientUserSlice from "./slices/clientUserSlice"

export default configureStore({
  reducer: {
    homeFeed: homeFeedSlice.reducer,
    clientUser: clientUserSlice.reducer
  },
})
