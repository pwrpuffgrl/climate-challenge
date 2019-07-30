import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background: #253044;
  height: 100vh;
  overflow: auto;
  position: relative;
`;

function Challenges({ challengeData, onJoinChallenge, onShowDuration }) {
  return (
    <>
      <Container>
        <Header title="CHALLENGES" />
        {challengeData.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={onJoinChallenge}
            onDuration={onShowDuration}
          />
        ))}
      </Container>
    </>
  );
}

export default Challenges;
