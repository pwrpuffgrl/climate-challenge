import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import BackgroundImage from '../components/BackgroundImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  overflow: auto;
  position: relative;
`;

function MyChallenges({ challenges, onJoinChallenge, onShowDate }) {
  console.log(challenges);
  return (
    <Container>
      <BackgroundImage src="https://www.androidworld.it/wp-content/uploads/2016/11/wallpaper-oneplus-3t-4.jpg" />
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
