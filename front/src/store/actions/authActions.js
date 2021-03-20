import { createAction } from '@reduxjs/toolkit';
import authService from '../../services/authServices';

import { setUser } from './userActions';

// export const loginAction = createAction('USER_LOGIN');
export const setAuthenticated = createAction('SET_AUTHENTICATED');
export const setAuthorizationLoading = createAction('SET_AUTHEORIZATION_LOADING');

export const fetchAuthentication = () => {
  return async (dispatch) => {
    try {
      const userData = await authService.silentLogin();
      console.log(userData);
      dispatch(setUser(userData));
      
      dispatch(setAuthenticated(true));
      dispatch(setAuthorizationLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setAuthenticated(false));
      dispatch(setAuthorizationLoading(false));
    }
  };
};
