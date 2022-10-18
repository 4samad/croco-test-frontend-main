import { createSlice } from '@reduxjs/toolkit';
import fetchCakeList from './cakeListAPI';

const initialState = {
  value: [],
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'cakeList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateCakeList : (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updateCakeList } = counterSlice.actions;

export const fetchAsync = () => async (dispatch) => {
  const response = await fetchCakeList();
  // The value we return becomes the `fulfilled` action payload
  dispatch(updateCakeList(response.data.cakes));
}

export default counterSlice.reducer;
