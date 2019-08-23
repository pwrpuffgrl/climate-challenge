import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItems from './MenuItems';
import MainLogo from './MainLogo';
import { rotate } from '../utils/animations';
import Leaf from '../images/LeafIcon.png';

const Footer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 10px;
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

const StyledLogo = styled(MainLogo)`
  fill: #936979;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
`;

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  function handleClick() {
    setShowMenu(!showMenu);
  }
  return (
    <Footer>
      <Background>
        <StyledLogo animation={rotate} />
        <Img src={Leaf} onClick={() => handleClick()} />
      </Background>
      {showMenu && <MenuItems onClose={() => setShowMenu(!showMenu)} />}
    </Footer>
  );
}

export default Menu;
