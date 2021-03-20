import { createAction } from '@reduxjs/toolkit';
import servicesService from '../../services/servicesServices';

export const setAllServices = createAction('SET_ALL_SERVICES');
export const setService = createAction('SET_SERVICE');

export const fetchCreateService = (serviceForm) => {
  return async (dispatch) => {
    try {
      console.log('XXXX');
      const serviceData = await servicesService.createService(serviceForm);
      console.log(serviceData);
      dispatch(setService(serviceData));
      
    } catch (error) {
      console.log(error);
      
    }
  };
};

export const fetchGetAllService = () => {
  return async (dispatch) => {
    try {
      const servicesData = await servicesService.getAll();
      console.log(servicesData);
      dispatch(setAllServices(servicesData));
      
    } catch (error) {
      console.log(error);
      
    }
  };
};

export const fetchGetOneService = (id) => {
  return async (dispatch) => {
    try {
      const serviceData = await servicesService.getOne(id);
      console.log(serviceData);
      
      return serviceData;
    } catch (error) {
      console.log(error);
      
    }
  };
};

export const fetchUpdateService = (id, serviceForm) => {
  return async (dispatch) => {
    try {
      const serviceData = await servicesService.update(id, serviceForm);
      console.log(serviceData);
      
      return serviceData;
    } catch (error) {
      console.log(error);
      
    }
  };
};
