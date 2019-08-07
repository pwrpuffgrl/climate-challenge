import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon from '../Images/icon.png';

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
        <i className="fas fa-home" />
      </NavLink>
      <NavLink to="/create">
        <i className="fas fa-plus-circle" />
      </NavLink>
      <NavLink to="/">
        <i className="fas fa-newspaper" />
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
