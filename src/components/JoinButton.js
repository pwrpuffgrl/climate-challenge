import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-size: 24px;
  border: none;
  background: none;
  color: #6b5f81;
`;

function JoinButton({ onClick, joined }) {
  return (
    <StyledButton onClick={onClick}>
      {joined ? (
        <i class="far fa-minus-square" />
      ) : (
        <i class="far fa-plus-square" />
      )}
    </StyledButton>
  );
}

export default JoinButton;
