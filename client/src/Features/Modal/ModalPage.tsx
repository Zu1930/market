import React from 'react';
import './modal.css';

type ModalWindowProps = {
  // isOpen: boolean;
  children: React.ReactNode;
};

function ModalWindow({ children }: ModalWindowProps): JSX.Element {
  // if (!isOpen) {
  //   return false;
  // }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default ModalWindow;
