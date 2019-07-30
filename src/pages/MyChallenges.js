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

function MyChallenges({ challenges, onJoinChallenge, onShowDuration }) {
  console.log(challenges);
  return (
    <Container>
      <Header title="MY CHALLENGES" />
      {challenges.map(challenge => (
        <Card
          key={challenge._id}
          challenge={challenge}
          onJoin={onJoinChallenge}
          onDuration={onShowDuration}
        />
      ))}
    </Container>
  );
}

export default MyChallenges;
