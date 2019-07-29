import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background: #242d42;
  height: 100vh;
  overflow: auto;
  position: relative;
`;

function Challenges({ challengeData, onJoinChallenge }) {
  return (
    <>
      <Container>
        <Header title="CHALLENGES" />
        {challengeData.map(item => (
          <Card key={item._id} data={item} onJoin={onJoinChallenge} />
        ))}
        <Footer />
      </Container>
    </>
  );
}

export default Challenges;
