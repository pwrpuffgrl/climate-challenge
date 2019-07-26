import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../Images/Header_Background.png';

const StyledHeader = styled.img``;

function Header({ size, font }) {
  return (
    <>
      <StyledHeader src={BackgroundImage} />
    </>
  );
}

export default Header;
