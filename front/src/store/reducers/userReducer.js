import { createReducer } from '@reduxjs/toolkit';

import { setUser } from '../actions/userActions';

const INITIAL_STATE = {};

const userReducer = createReducer(INITIAL_STATE, {
  [setUser]: (state, action) => ({ ...action.payload })
});

export default userReducer;
