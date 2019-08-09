import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import BackgroundPicture from '../Images/BackgroundPicture.png';

const StyledHeader = styled.div`
  align-items: center;
  min-height: 60px;
  background: url(${BackgroundPicture});
  z-index: 1;
`;

const StyledHeadline = styled(Headline)`
  color: #936979;
  margin: 0;
  padding: 10px;
  text-align: center;
`;

function Header({ title, ...props }) {
  return (
    <StyledHeader>
      <StyledHeadline size="XL" font="main">
        {title}
      </StyledHeadline>
    </StyledHeader>
  );
}

export default Header;
