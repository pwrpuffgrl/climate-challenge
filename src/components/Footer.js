import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Headline from '../components/Headline';

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
  text-decoration: none;
`;

const StyledHeadline = styled(Headline)`
  font-size: 12px;
`;

const Titles = styled.div`
  display: flex;
  height: 10px;
  align-items: center;
  justify-content: space-around;
  background: rgba(36, 45, 66, 0.6);
  padding-bottom: 5px;
  margin: 0;
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
