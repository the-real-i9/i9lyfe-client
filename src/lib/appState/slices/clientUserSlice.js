import { createSlice } from "@reduxjs/toolkit"

const clientUserSlice = createSlice({
  name: "clientUser",
  initialState: {
    userData: {}
  },
  reducers: {
    initClientUser: (state, { payload }) => {
      state.userData = payload
    },
  },
})

export const { initClientUser } = clientUserSlice.actions

export default clientUserSlice
