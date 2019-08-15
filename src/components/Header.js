import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Menu from '../components/Menu';

const StyledHeader = styled.div`
  align-items: center;
  min-height: 60px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledHeadline = styled(Headline)`
  color: #936979;
  margin: 0;
  padding: 10px;
  text-align: center;
`;

const BurgerMenu = styled(Menu)`
  color: green;
`;

function Header({ title, ...props }) {
  function renderMenu() {}

  return (
    <StyledHeader>
      <StyledHeadline size="XL" font="main">
        {title}
      </StyledHeadline>
      <BurgerMenu onClick={renderMenu} />
    </StyledHeader>
  );
}

export default Header;
