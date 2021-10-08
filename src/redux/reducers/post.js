import { createSlice } from '@reduxjs/toolkit';

export const post = createSlice({
  name: 'post',
  initialState: {
    activePost: {},
  },
  reducers: {
    setActivePost: (state, action) => {
      return { ...state, activePost: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActivePost } = post.actions;

export default post.reducer;
