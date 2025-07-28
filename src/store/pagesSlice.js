import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    current: 'Splash', // default starting page
  },
  reducers: {
    setPage: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setPage } = pagesSlice.actions;
export default pagesSlice.reducer;
