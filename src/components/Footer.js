import React from 'react';
import styled from 'styled-components';
import icon from '../Images/icon.png';
import { Link } from 'react-router-dom';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background: white;
`;

const Background = styled.div`
  background: #936979;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

const IMG = styled.img`
  height: 150%;
  width: 150%;
`;

function Footer(onClick) {
  return (
    <StyledFooter>
      <Background>
        <IMG src={icon} alt="icon" onClick={onClick} />
      </Background>
    </StyledFooter>
  );
}

export default Footer;
