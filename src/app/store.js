import { configureStore } from '@reduxjs/toolkit';
import cakeListReducer from '../features/counter/cakeListSlice';

const store = configureStore({
  reducer: {
    cakeList: cakeListReducer,
  },
});

export default store;
