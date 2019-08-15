import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  font-size: 30px;
  color: #6b5f81;
  position: fixed;
  right: 15px;

  &:active {
    height: 100%;
    width: 400px;
    background: #6b5f81;
    position: fixed;
    right: 15px;
  }
`;

function Menu({ onClick }) {
  return (
    <Icon onClick={onClick}>
      <i className="fas fa-bars" />
    </Icon>
  );
}

export default Menu;
