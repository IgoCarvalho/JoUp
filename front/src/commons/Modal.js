import React from 'react';

import './Modal.css';

function Modal({ children, open, onClose }) {
  function closeModal() {
    onClose && onClose();
  }

  if (!open) {
    return null;
  }

  return (
    <div className="app-modal" onClick={closeModal}>
      {children}
    </div>
  );
}

export default Modal;
