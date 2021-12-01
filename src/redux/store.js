import { configureStore } from '@reduxjs/toolkit';
import post from './reducers/post';

export default configureStore({
  reducer: {
    post: post,
  },
});
