import { createReducer } from '@reduxjs/toolkit';

import { setAllSolicitacoes, setSolicitacao } from '../actions/solicitacoesActions';

const INITIAL_STATE = [];

const solicitacoesReducer = createReducer(INITIAL_STATE, {
  [setAllSolicitacoes]: (state, action) => ([ ...action.payload ]),
  [setSolicitacao]: (state, action) => {
    return state.map((solicitacao) => {
      if(solicitacao._id === action.payload._id) {
        return action.payload;
      }

      return solicitacao; 
    })
  },
});

export default solicitacoesReducer;
