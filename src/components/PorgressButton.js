import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 8px;
  font-size: 20px;
  border: none;
  background: none;
  color: #2e1f4c;
`;

function ProgressButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i className="far fa-check-circle" />{' '}
    </StyledButton>
  );
}

export default ProgressButton;
