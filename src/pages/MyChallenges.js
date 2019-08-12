import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import Dialog from '../components/Dialog';
import Headline from '../components/Headline';
import ButtonLink from '../components/ButtonLink';
import * as moment from 'moment';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;
const CheckboxContainer = styled.form`
  display: flex;
  margin-top: 20px;
  align-items: center;
  color: white;
`;
const Checkbox = styled.input`
  height: 16px;
  width: 16px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #242d42;
  font-family: helvetica;
  padding: 10px;
`;
const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  padding-bottom: 10px;
`;

function MyChallenges({ challenges, onJoinChallenge, onUpdateChallenge }) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  function handleProgressClick(challenge) {
    setSelectedChallenge(challenge);
  }

  function handleCheckbox(event) {
    const { value } = event.target;

    if (value === 'yes') {
      onUpdateChallenge({
        ...selectedChallenge,
        lastParticipated: moment().toISOString()
      });
    }

    setSelectedChallenge(null);
  }

  return (
    <>
      <Grid>
        <Header title="MY CHALLENGES" />
        <CardContainer>
          {challenges.map(challenge => (
            <Card
              key={challenge._id}
              challenge={challenge}
              onJoin={onJoinChallenge}
              joined={challenge.joined}
              onProgress={() => handleProgressClick(challenge)}
            />
          ))}
        </CardContainer>
        <Footer />
      </Grid>

      {selectedChallenge && (
        <Dialog onClose={() => setSelectedChallenge(null)}>
          <Headline size="S" font="sub">
            Log your progress
          </Headline>
          <Content>Did you master the challenge today?</Content>
          <CheckboxContainer>
            <Label htmlFor="yes">
              YES <i className="far fa-thumbs-up" />
            </Label>
            <Checkbox
              name="progress"
              type="radio"
              value="yes"
              onChange={handleCheckbox}
            />
            <Label htmlFor="no">
              NO <i className="far fa-thumbs-down" />
            </Label>
            <Checkbox
              name="progress"
              type="radio"
              onChange={handleCheckbox}
              value="no"
            />
          </CheckboxContainer>
          <ButtonLink to="/challenges"> Not now</ButtonLink>
        </Dialog>
      )}
    </>
  );
}

export default MyChallenges;
