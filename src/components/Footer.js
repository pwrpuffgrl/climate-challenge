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
  font-size: 32px;
  color: #936979;
  text-decoration: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/mychallenges">
        <i className="fab fa-gratipay" />
      </NavLink>
      <NavLink to="/create">
        <i className="fas fa-plus-circle" />
      </NavLink>
      <NavLink to="/profile">
        <i className="far fa-user-circle" />
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
