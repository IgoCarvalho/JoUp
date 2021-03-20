import { createAction } from '@reduxjs/toolkit';
import authServices from '../../services/authServices';
import userService from '../../services/userServices';
import { setAuthenticated } from './authActions';

export const loginAction = createAction('USER_LOGIN');
export const setUser = createAction('SET_USER');

export const fetchLogin = (credential, password) => {
  return async (dispatch) => {
    const userData = await authServices.login(credential, password);

    dispatch(setUser(userData));
    dispatch(setAuthenticated(true));

    console.log(userData);
  };
};

export const fetchSignup = (userForm) => {
  return async (dispatch) => {
    const userData = await authServices.signUp(userForm);

    dispatch(setUser(userData));
    dispatch(setAuthenticated(true));

    console.log(userData);
  };
};

export const fetchPlan = (plan) => {
  return async (dispatch) => {
    const userData = await userService.contractPlan(plan);

    dispatch(setUser(userData));

    console.log(userData);
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    authServices.logout();
    dispatch(setAuthenticated(false));

    console.log('logout');
  };
};
