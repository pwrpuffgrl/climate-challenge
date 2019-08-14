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

function MyChallenges({
  challenges,
  activeUser,
  onJoinChallenge,
  onUpdateChallenge,
  onUpdateUser
}) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [blockProgress, setBlockProgress] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const tomorrow = moment()
    .add(1, 'day')
    .startOf('day');
  const time = tomorrow.diff(moment().utc(), 'hours');
  const today = moment().format('YYYY-MM-DD');

  function handleProgressClick(challenge) {
    setSelectedChallenge(challenge);
    if (challenge.lastParticipated === challenge.endDate) {
      onUpdateChallenge({
        ...selectedChallenge,
        completed: true
      });
    }
    if (challenge.modified === today) {
      setBlockProgress(true);
      setShowDialog(true);
    }
  }

  function handleCheckbox(event) {
    const { value } = event.target;
    if (value === 'yes') {
      onUpdateChallenge({
        ...selectedChallenge,
        karma: selectedChallenge.karma + 1,
        streak: selectedChallenge.streak + 1,
        modified: today,
        lastParticipated: today
      });
    } else {
      onUpdateChallenge({
        ...selectedChallenge,
        streak: 0,
        modified: today
      });
    }
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

      {selectedChallenge && !blockProgress && (
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
              onClick={handleCheckbox}
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

      {blockProgress && showDialog && (
        <Dialog onClose={() => setShowDialog(false)}>
          <Headline size="S" font="sub">
            You can only log your progress once a day.
          </Headline>
          <Content>You can log again in about {time} hours.</Content>
        </Dialog>
      )}
    </>
  );
}

export default MyChallenges;
