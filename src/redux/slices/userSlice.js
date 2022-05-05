import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  details : null,

  repos: [],
  repoStatus: 'IDLE',
  repoError: '',

  isAuthenticated: null,
  loading: false,
};

export const getRepos = createAsyncThunk( 'getRepositories', async ( _, { getState , rejectWithValue, fulfillWithValue } ) =>
{
    const { details } = getState()?.user
    const resp = await axios.get(
      `${details.repos_url}?per_page=20&sort=created:asc`,
      {
        method: "GET",
        // headers: authHeader(),
      },
    );

    if ( resp.data )
    {
      const response = resp.data 
      
      if ( Array.isArray( response ) && response.length )
      {
        return fulfillWithValue( response );
      }

      // return fulfillWithValue( [] );
    }
    else
    {
      return rejectWithValue( resp.error );
    }

} );

export const UserSlice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    setProfile: ( state, action ) => {
      state.details = action.payload;
    },
    setAuthentication: ( state, action ) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( getRepos.pending, ( state ) =>
      {
        state.repoStatus = 'PENDING';
        state.cryptoWalletsError = "";
      } )
      .addCase( getRepos.fulfilled, ( state, action ) =>
      {
        state.repoStatus = 'RESOLVED';
        state.repos = action.payload;
        state.repoError = "";
      } )
      .addCase( getRepos.rejected, ( state, action ) =>
      {
        state.repoStatus = 'REJECTED';
        state.repoError = action.payload;
      } )
  }
  // {
  //   [getRepos.pending]: ( state ) => {
  //     state.repoStatus = 'PENDING';
  //     state.cryptoWalletsError = "";
  //   },
  //   [getRepos.fulfilled]: ( state, action ) => {
  //     state.repoStatus = 'RESOLVED';
  //     state.repos = action.payload;
  //     state.repoError = "";
  //   },
  //   [getRepos.rejected]: ( state, action ) => {
  //     state.repoStatus = 'REJECTED';
  //     state.repoError = action.payload;
  //   },
  // },
} )

export const { setProfile, setAuthentication } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;