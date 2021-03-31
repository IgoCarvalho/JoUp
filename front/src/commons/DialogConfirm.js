import React from 'react';

import SuccessIcon from '../images/MsgConfirm.svg'
import ErrorIcon from '../images/MsgNegative.svg'

import './DialogConfirm.css';

export const SuccessMsg = ({ message }) => (
  <div className="message-dialog success">
      <img src={SuccessIcon} alt="Icone de sucesso" />
      <p>{ message }</p>
  </div>
)
export const ErrorMsg = ({ message }) => (
  <div className="message-dialog success">
      <img src={ErrorIcon} alt="Icone de erro" />
      <p>{ message }</p>
  </div>
)

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
