import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';

const StyledHeader = styled.div`
  min-height: 60px;
  background: #242d42;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
`;
const StyledHeadline = styled(Headline)`
  color: white;
  margin: 0;
  padding: 10px;
  text-align: center;
`;

function Header({ title, ...props }) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline size="L" font="main">
          {title}
        </StyledHeadline>
      </StyledHeader>
    </>
  );
}

export default Header;
