import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLoading from './AppLoading';
import { fetchAuthentication } from '../store/actions/authActions';

function Auth({ children }) {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthentication());
  }, [dispatch]);

  if (isLoading) {
    return <AppLoading />;
  }

  return <>{children}</>;
}

export default Auth;
