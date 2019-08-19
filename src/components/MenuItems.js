import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import { createFade } from '../utils/animations';
import BackgroundImage from '../Images/Abstract4.png';

const A = styled.a`
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: block;
  margin: 10px;
  font-family: 'helvetica';
  padding-top: 10px;
  transition: all 1s;

  &:active {
    font-size: 24px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(256, 256, 256, 0.9);
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const MenuContainer = styled.div`
  background-image: url(${BackgroundImage});
  color: white;
  padding: 20px;
  min-height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  animation: ${createFade} 0.5s;
`;

function MenuItems({ showMenu, onClose }) {
  return (
    <Container showMenu={showMenu}>
      <Backdrop onClick={onClose} />
      <MenuContainer>
        <Headline size="M">Menu</Headline>
        <A href="/mychallenges">My challenges</A>
        <A href="/create">Create new challenge</A>
        <A href="/profile">Profile </A>
        <A href="/challenges">All challenges</A>
        <A href="/news">Newsfeed</A>
      </MenuContainer>
    </Container>
  );
}

export default MenuItems;
