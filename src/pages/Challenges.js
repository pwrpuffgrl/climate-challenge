import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';

const Container = styled.div`
  margin: 0;
  background: #242d42;
  height: 100vh;
  overflow: auto;
`;

function Challenges({ size, font, title, cardData }) {
  return (
    <>
      <Container>
        <Header title="CHALLENGES" />
        {cardData.map(item => (
          <Card key={item._id} data={item} />
        ))}
      </Container>
    </>
  );
}

export default Challenges;
