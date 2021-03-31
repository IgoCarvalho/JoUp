import { createReducer } from '@reduxjs/toolkit';

import { setAllProjetos, setProjeto } from '../actions/projetosActions';

const INITIAL_STATE = [];

const projetosReducer = createReducer(INITIAL_STATE, {
  [setAllProjetos]: (state, action) => ([ ...action.payload ]),
  [setProjeto]: (state, action) => {
    return state.map((projeto) => {
      if(projeto._id === action.payload._id) {
        return action.payload;
      }

      return projeto;
    })
  },
});

export default projetosReducer;
