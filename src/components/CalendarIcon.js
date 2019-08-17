import React from 'react';
import styled from 'styled-components';
import CalenderLogo from './CalenderLogo';

const StyledCalender = styled.button`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 20px;
  border: none;
  background: none;
  color: #2e1f4c;
  margin-top: 10px;
`;

function CalenderIcon({ onClick }) {
  return (
    <StyledCalender onClick={onClick}>
      <CalenderLogo />
    </StyledCalender>
  );
}

export default CalenderIcon;
