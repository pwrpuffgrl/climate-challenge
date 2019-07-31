import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const DialogContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  min-height: 200px;
`;

function Dialog({ children, onClose }) {
  return (
    <Backdrop onClick={onClose}>
      <DialogContainer>{children}</DialogContainer>
    </Backdrop>
  );
}

export default Dialog;
