import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Headline from '../components/Headline';

const Container = styled.div`
  margin: 0;
`;

function Challenges({ size, font }) {
  return (
    <>
      <Container>
        <Header>
          <Headline size="L" font="main">
            CHALLENGES
          </Headline>
        </Header>
      </Container>
    </>
  );
}

export default Challenges;
