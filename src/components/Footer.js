import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background: white;
`;

const NavLink = styled(Link)`
  margin: 0;
  font-size: 34px;
  color: #936979;
  text-decoration: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/mychallenges">
        <i className="fas fa-hand-holding-heart" />
      </NavLink>
      <NavLink to="/create">
        <i className="fas fa-plus-circle" />
      </NavLink>
      <NavLink to="/">
        <i className="fas fa-home" />
      </NavLink>
      <NavLink to="/challenges">
        <i className="fas fa-globe-africa" />
      </NavLink>
      <NavLink to="/news">
        <i className="fas fa-newspaper" />
      </NavLink>
    </StyledFooter>
  );
}

export default Footer;
