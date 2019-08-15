import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import ButtonLink from '../components/ButtonLink';
import Dialog from '../components/Dialog';
import Headline from '../components/Headline';
import Grid from '../components/Grid';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;

function Challenges({ challengeData, onJoinChallenge, onDeleteChallenge }) {
  const [showJoined, setShowJoined] = useState(false);

  function handleJoin(id) {
    onJoinChallenge(id);
    setShowJoined(true);
  }

  function handleDelete(id) {
    onDeleteChallenge(id);
  }

  return (
    <>
      <Grid>
        <Header title="Challenges" />
        <CardContainer>
          {challengeData.map(challenge => (
            <Card
              key={challenge._id}
              challenge={challenge}
              onJoin={handleJoin}
              onDelete={handleDelete}
            />
          ))}
        </CardContainer>
        <Footer />
      </Grid>

      {showJoined && (
        <Dialog onClose={() => setShowJoined(false)}>
          <Headline size="S" font="sub">
            Yay!{' '}
            <span role="img" aria-label="heart emoji">
              &#9829; Thanks for participating in this challenge! &#9829;
            </span>
          </Headline>
          <ButtonLink to="/mychallenges">See My Challenges</ButtonLink>
        </Dialog>
      )}
    </>
  );
}

export default Challenges;
