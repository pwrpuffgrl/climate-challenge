import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import BackgroundImage from '../components/BackgroundImage';
import Fullscreen from '../components/Fullscreen';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  overflow: auto;
  position: relative;
`;

function Challenges({ challengeData, onJoinChallenge, onShowDate }) {
  return (
    <>
      <Fullscreen>
        <Container>
          <BackgroundImage src="https://www.androidworld.it/wp-content/uploads/2016/11/wallpaper-oneplus-3t-4.jpg" />
          <Header title="CHALLENGES" />
          {challengeData.map(challenge => (
            <Card
              key={challenge._id}
              challenge={challenge}
              onJoin={onJoinChallenge}
              onDate={onShowDate}
            />
          ))}
        </Container>
      </Fullscreen>
    </>
  );
}

export default Challenges;
