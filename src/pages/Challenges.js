import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import ButtonLink from '../components/ButtonLink';
import Dialog from '../components/Dialog';
import Headline from '../components/Headline';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  max-width: 600px;
  position: relative;
  padding-top: 50px;
`;

function Challenges({ challengeData, onJoinChallenge, onShowDate }) {
  const [showJoined, setShowJoined] = useState(false);

  function handleJoin(id) {
    onJoinChallenge(id);
    setShowJoined(true);
  }

  return (
    <>
      <Container>
        <Header title="CHALLENGES" />
        {challengeData.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={handleJoin}
            onDate={onShowDate}
          />
        ))}
        <Footer />
      </Container>
      {showJoined && (
        <Dialog onClose={() => setShowJoined(false)}>
          <Headline size="S" font="sub">
            Yay! 💜 💙 Thanks for participating in this challenge!{' '}
          </Headline>
          <ButtonLink to="/mychallenges">See My Challenges</ButtonLink>
        </Dialog>
      )}
    </>
  );
}

export default Challenges;
