import React from 'react';
import styled from 'styled-components';
import CalenderLogo from './CalenderLogo';
import propTypes from 'prop-types';

const StyledCalender = styled.button`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 20px;
  border: none;
  background: none;
  color: #2e1f4c;
  margin-top: 10px;

  &:focus {
    outline: none;
  }
`;

function CalenderIcon({ onClick }) {
  return (
    <StyledCalender onClick={onClick}>
      <CalenderLogo />
    </StyledCalender>
  );
}

CalenderIcon.propTypes = {
  onClick: propTypes.func
};

export default CalenderIcon;
