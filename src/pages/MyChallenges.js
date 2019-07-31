import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';

import Background from '../Images/AppBackground.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  position: relative;
  padding-top: 50px;
`;

const BackgroundImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  filter: brightness(0.8) saturate(1.5);
  position: fixed;
`;

function MyChallenges({ challenges, onJoinChallenge, onShowDate }) {
  console.log(challenges);
  return (
    <Container>
      <BackgroundImage src={Background} />
      <Header title="MY CHALLENGES" />
      {challenges.map(challenge => (
        <Card
          key={challenge._id}
          challenge={challenge}
          onJoin={onJoinChallenge}
          onDate={onShowDate}
        />
      ))}
    </Container>
  );
}

export default MyChallenges;
