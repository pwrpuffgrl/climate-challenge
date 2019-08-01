import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';

const StyledHeader = styled.div`
  min-height: 60px;
  background: rgba(f, f, f, 1);
`;

const StyledHeadline = styled(Headline)`
  color: black;
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
