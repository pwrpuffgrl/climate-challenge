import React from 'react';
import styled from 'styled-components';

const StyledCalender = styled.button`
  position: absolute;
  left: 10px;
  bottom: 15px;
  font-size: 20px;
  border: none;
  background: none;
  color: #2e1f4c;
`;

function CalenderIcon({ onClick }) {
  return (
    <StyledCalender onClick={onClick}>
      <i className="far fa-calendar-alt" />
    </StyledCalender>
  );
}

export default CalenderIcon;
