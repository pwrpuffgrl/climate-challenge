import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 8px;
  font-size: 24px;
  border: none;
  background: none;
  color: #6b5f81;
`;

function JoinButton({ onClick, joined }) {
  return (
    <StyledButton onClick={onClick}>
      {joined ? (
        <i className="far fa-minus-square" />
      ) : (
        <i className="far fa-plus-square" />
      )}
    </StyledButton>
  );
}

export default JoinButton;
