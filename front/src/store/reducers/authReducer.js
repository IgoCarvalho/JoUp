import { createReducer } from '@reduxjs/toolkit';

import { setAuthenticated, setAuthorizationLoading } from '../actions/authActions';

const INITIAL_STATE = {
  authenticated: false,
  isLoading: true
};

const authReducer = createReducer(INITIAL_STATE, {
  [setAuthenticated]: (state, action) => ({ ...state, authenticated: action.payload }),
  [setAuthorizationLoading]: (state, action) => ({ ...state, isLoading: action.payload })
});

export default authReducer;
