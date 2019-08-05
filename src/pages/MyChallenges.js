import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { cardFade } from '../utils/animations';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
  animation: ${cardFade} 2s ease 1 both;
`;

function MyChallenges({ challenges, onJoinChallenge, onUpdateChallenge }) {
  console.log(challenges);

  function handleUpdateProgress(lastParticipated, challenge) {
    onUpdateChallenge({
      ...challenge,
      lastParticipated
    });
  }

  return (
    <Grid>
      <Header title="MY CHALLENGES" />
      <CardContainer>
        {challenges.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={onJoinChallenge}
            joined={challenge.joined}
            onUpdateProgress={lastParticipated =>
              handleUpdateProgress(lastParticipated, challenge)
            }
          />
        ))}
      </CardContainer>
      <Footer />
    </Grid>
  );
}

export default MyChallenges;
