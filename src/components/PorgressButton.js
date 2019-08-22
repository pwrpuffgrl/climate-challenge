import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 8px;
  font-size: 24px;
  border: none;
  background: none;
  color: #6b5f81;
`;

function ProgressButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i className="far fa-check-square" />
    </StyledButton>
  );
}

ProgressButton.propTypes = {
  onClick: propTypes.func
};
export default ProgressButton;
