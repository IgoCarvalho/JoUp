import { createAction } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const loginAction = createAction('USER_LOGIN');
export const setUser = createAction('SET_USER');

export const fetchLogin = (credential, password) => {
  return async (dispatch) => {
    const userData = await authService.login(credential, password);
    // dispatch(setUser(userData));
    console.log(userData);
  };
};
