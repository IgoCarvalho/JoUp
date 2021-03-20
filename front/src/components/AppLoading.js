import React from 'react';
import ReactLoading from 'react-loading'
import LogoMax from '../commons/LogoMax';

import './AppLoading.css'

function AppLoading() {
  return (
    <div className="app-loading">
      <LogoMax />
      <ReactLoading type="bars" color="#7f529a" height={200}  width={200}/>
    </div>
  );
}

export default AppLoading;