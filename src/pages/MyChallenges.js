import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Footer from '../components/Footer';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;

function MyChallenges({ challenges, onJoinChallenge, onShowDate }) {
  console.log(challenges);
  return (
    <Grid>
      <Header title="MY CHALLENGES" />
      <CardContainer>
        {challenges.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={onJoinChallenge}
            onDate={onShowDate}
            joined={challenge.joined}
          />
        ))}
      </CardContainer>
      <Footer />
    </Grid>
  );
}

export default MyChallenges;
