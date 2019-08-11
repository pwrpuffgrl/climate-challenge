import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 12px;
  font-size: 24px;
  border: none;
  background: none;
  color: #6b5f81;
`;

function DeleteButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i class="far fa-trash-alt" />
    </StyledButton>
  );
}

export default DeleteButton;
