import React from 'react';
import styled from 'styled-components';

const StyledCalender = styled.button`
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 20px;
`;

function Calender({ onClick }) {
  return (
    <StyledCalender onClick={onClick}>
      <i class="far fa-calendar-alt" />
    </StyledCalender>
  );
}

export default Calender;
