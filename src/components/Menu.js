import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItems from './MenuItems';
const Icon = styled.i`
  font-size: 30px;
  color: #936979;
  bottom: 15px;
  z-index: 4000;
`;

const Footer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: transparent;
  z-index: 4000;
`;

const Background = styled.div`
  background: white;
  box-shadow: 2px 1px 22px 0px rgba(122, 100, 98, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function handleClick() {
    setShowMenu(!showMenu);
  }
  return (
    <Footer>
      <Background>
        <Icon onClick={() => handleClick()} className="fas fa-bars" />
      </Background>
      {showMenu && <MenuItems />}
    </Footer>
  );
}

export default Menu;
