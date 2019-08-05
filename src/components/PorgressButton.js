import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 15px;
  font-size: 20px;
`;

function ProgressButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i className="fas fa-tasks" />
    </StyledButton>
  );
}

export default ProgressButton;
