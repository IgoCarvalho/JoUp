import React from 'react';

import './DialogConfirm.css';

function DialogConfirm({ open, ...props }) {
  if (!open) {
    return null;
  }

  return (
    <div className="app-dialog">
      <h2>{ props.title }</h2>
      <p>{ props.message }</p>
      <div className="actions-container">
        <button onClick={props.onCancel} className="actino-btn cancel">{ props.cancelBtnText }</button>
        <button onClick={props.onSuccess} className="actino-btn success">{ props.successBtnText }</button>
      </div>
    </div>
  );
}

export default DialogConfirm;
