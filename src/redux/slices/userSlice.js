import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseURL = 'https://api.github.com/';

const initialState = {
  details : {},
  repos: [],
  isAuthenticated: null,
  loading: false,
};

export const UserSlice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    setProfile: ( state, action ) => {
      state.details = action.payload;
    },
  }
} )

export const { setProfile } = UserSlice.actions;

export default UserSlice.reducer;