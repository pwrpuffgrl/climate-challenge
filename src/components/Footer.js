import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background: rgba(36, 45, 66, 0.6);
`;

const NavLink = styled(Link)`
  margin: 0;
  font-size: 34px;
  color: white;
`;
function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/mychallenges">
        <i class="fas fa-home" />
      </NavLink>
      <NavLink to="/create">
        <i class="fas fa-plus-circle" />
      </NavLink>
      <NavLink to="/">
        <i class="fas fa-newspaper" />
      </NavLink>
      <NavLink to="/challenges">
        <i class="fas fa-globe-africa" />
      </NavLink>
    </StyledFooter>
  );
}

export default Footer;
