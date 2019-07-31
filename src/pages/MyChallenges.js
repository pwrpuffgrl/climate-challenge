import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import BackgroundImage from '../components/BackgroundImage';
import Background from '../Images/AppBackground.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  position: relative;
  padding-top: 50px;
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
