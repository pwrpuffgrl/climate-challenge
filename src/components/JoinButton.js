import React from 'react';
import styled from 'styled-components';
import HeartIcon from '../Images/HeartIcon.png';

const StyledButton = styled.img`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

function JoinButton() {
  return <StyledButton src={HeartIcon} />;
}

export default JoinButton;
