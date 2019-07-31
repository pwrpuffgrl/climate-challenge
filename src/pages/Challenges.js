import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import BackgroundImage from '../components/BackgroundImage';
import Background from '../Images/AppBackground.png';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  position: relative;
  padding-top: 50px;
`;

function Challenges({ challengeData, onJoinChallenge, onShowDate }) {
  return (
    <>
      <BackgroundImage src={Background} />
      <Container>
        <Header title="CHALLENGES" />
        {challengeData.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={onJoinChallenge}
            onDate={onShowDate}
          />
        ))}
        <Footer />
      </Container>
    </>
  );
}

export default Challenges;
