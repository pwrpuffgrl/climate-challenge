import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 20px;
`;

function JoinButton({ onClick, joined }) {
  return (
    <StyledButton onClick={onClick}>
      {joined ? (
        <i className="fas fa-minus-circle" />
      ) : (
        <i className="fas fa-plus-circle" />
      )}
    </StyledButton>
  );
}

export default JoinButton;
