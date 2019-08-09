import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';

const StyledHeader = styled.div`
  align-items: center;
  min-height: 60px;
  background: #6b8c79;
`;

const StyledHeadline = styled(Headline)`
  color: white;
  margin: 0;
  padding: 10px;
  text-align: center;
`;

function Header({ title, ...props }) {
  return (
    <StyledHeader>
      <StyledHeadline size="L" font="main">
        {title}
      </StyledHeadline>
    </StyledHeader>
  );
}

export default Header;
