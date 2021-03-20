import { createReducer } from '@reduxjs/toolkit';

import { setService, setAllServices } from '../actions/servicesActions';

const INITIAL_STATE = [];

const servicesReducer = createReducer(INITIAL_STATE, {
  [setAllServices]: (state, action) => ([ ...action.payload ]),
  [setService]: (state, action) => ([ ...state, action.payload ]),
});

export default servicesReducer;
