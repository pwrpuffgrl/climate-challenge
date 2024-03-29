import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogContainer = styled.div`
  background: white;
  color: #7c5d6a;
  border-radius: 15px;
  padding: 20px;
  min-height: 200px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
`;

function Dialog({ children, onClose }) {
  return (
    <>
      <Backdrop />
      <Container onClick={onClose}>
        <DialogContainer>{children}</DialogContainer>
      </Container>
    </>
  );
}

Dialog.propTypes = {
  onClose: propTypes.func
};

export default Dialog;
