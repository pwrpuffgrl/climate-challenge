import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 20px;
`;

function JoinButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i class="fas fa-plus-circle" />
    </StyledButton>
  );
}

export default JoinButton;
