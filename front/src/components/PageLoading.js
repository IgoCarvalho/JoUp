import React from 'react';
import ReactLoading from 'react-loading'

import './PageLoading.css'

function PageLoading() {
  return (
    <div className="page-loading">
      <ReactLoading type="bubbles" color="#7f529a" height={200}  width={200}/>
    </div>
  );
}

export default PageLoading;