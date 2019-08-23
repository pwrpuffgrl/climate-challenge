import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 10px;
  font-size: 22px;
  border: none;
  background: none;
  color: #6b5f81;
`;

function DeleteButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <i className="far fa-trash-alt shake" />
    </StyledButton>
  );
}

DeleteButton.propTypes = {
  onClick: propTypes.func
};
export default DeleteButton;
