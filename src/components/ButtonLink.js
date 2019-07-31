import React from 'react';
import styled from 'styled-components';
import { appear } from '../utils/animations';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: white;
  animation: ${appear} 10s;
  height: 40px;
  margin-top: 30px;
  border-radius: 12px;
  font-family: 'Raleway';
  font-size: 16px;
`;

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <StyledButton {...other}>{children}</StyledButton>
    </Link>
  );
}

export default ButtonLink;
