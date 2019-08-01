import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Grid from '../components/Grid';

const CardContainer = styled.div`
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
    <Grid>
      <Header title="MY CHALLENGES" />
      <CardContainer>
        {challenges.map(challenge => (
          <Card
            key={challenge._id}
            challenge={challenge}
            onJoin={onJoinChallenge}
            onDate={onShowDate}
          />
        ))}
      </CardContainer>
    </Grid>
  );
}

export default MyChallenges;
