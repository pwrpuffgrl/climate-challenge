import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import propTypes from 'prop-types';

const StyledHeader = styled.div`
  align-items: center;
  min-height: 60px;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const StyledHeadline = styled(Headline)`
  color: #936979;
  margin: 0;
  padding: 10px;
  text-align: center;
`;

function Header({ title, ...props }) {
  return (
    <StyledHeader data-cy="header-title">
      <StyledHeadline size="XL" font="main">
        {title}
      </StyledHeadline>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: propTypes.string
};
export default Header;
