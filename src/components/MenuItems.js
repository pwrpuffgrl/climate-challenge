import React from 'react';
import styled from 'styled-components';
import Headline from './Headline';

const A = styled.a`
  font-size: 20px;
  color: #936979;
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
  background: rgba(0, 0, 0, 0.7);
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
  background: white;
  color: #7c5d6a;
  padding: 20px;
  min-height: auto;
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
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
