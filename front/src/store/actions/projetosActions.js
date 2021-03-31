import { createAction } from '@reduxjs/toolkit';
import projetoServices from '../../services/projetoServices';

export const setAllProjetos = createAction('SET_ALL_PROJETOS');
export const setProjeto = createAction('SET_PROJETO');

export const fetchCreateProjeto = (projetoForm) => {
  return async (dispatch) => {
    try {
      console.log('XXXX');
      const projetoData = await projetoServices.create(projetoForm);
      console.log(projetoData);
      dispatch(setProjeto(projetoData));
      
      return projetoData;
    } catch (error) {
      console.log(error);
      
    }
  };
};

export const fetchGetAllProjetos = () => {
  return async (dispatch) => {
    try {
      const projetosData = await projetoServices.getAll();
      console.log(projetosData);
      dispatch(setAllProjetos(projetosData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGetOneProjeto = (id) => {
  return async (dispatch) => {
    try {
      const projetoData = await projetoServices.getOne(id);
      console.log(projetoData);

      return projetoData;
    } catch (error) {
      console.log(error);

    }
  };
};

export const fetchUpdateProjeto = (id, projetoData) => {
  return async (dispatch) => {
    try {
      const projetoUpdated = await projetoServices.update(id, projetoData);
      console.log(projetoUpdated);

      dispatch(setProjeto(projetoUpdated));

      return projetoUpdated;
    } catch (error) {
      console.log(error);
    }
  };
};
