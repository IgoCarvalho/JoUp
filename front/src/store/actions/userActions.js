import { createAction } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const loginAction = createAction('USER_LOGIN');
export const setUser = createAction('SET_USER');

export const fetchLogin = (credentials, password) => {
  return async (dispatch) => {
    const userData = await authService.login(credentials, password);
    // dispatch(setUser(userData));
    console.log(userData);
  };
};
