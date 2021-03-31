import { createAction } from '@reduxjs/toolkit';
import solicitacoesService from '../../services/solicitacoesService';

export const setAllSolicitacoes = createAction('SET_ALL_SOLICITACOES');
export const setSolicitacao = createAction('SET_SOLICITACAO');

export const fetchGetAllSolicitacoes = () => {
  return async (dispatch) => {
    try {
      const solicitacoesData = await solicitacoesService.getAll();
      console.log(solicitacoesData);
      dispatch(setAllSolicitacoes(solicitacoesData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGetOneSolicitacao = (id) => {
  return async (dispatch) => {
    try {
      const solicitacaoData = await solicitacoesService.getOne(id);
      console.log(solicitacaoData);

      return solicitacaoData;
    } catch (error) {
      console.log(error);

    }
  };
};

export const fetchUpdateStatus = (id, status) => {
  return async (dispatch) => {
    try {
      const solicitacaoData = await solicitacoesService.updateStatus(id, status);
      console.log(solicitacaoData);

      dispatch(setSolicitacao(solicitacaoData));

      // return serviceData;
    } catch (error) {
      console.log(error);
    }
  };
};
