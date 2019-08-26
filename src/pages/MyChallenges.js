import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/challenge/Card';
import Grid from '../components/Grid';
import Dialog from '../components/Dialog';
import Headline from '../components/Headline';
import Menu from '../components/Menu';
import * as moment from 'moment';
import ProgressDialog from '../components/ProgressDialog';
import propTypes from 'prop-types';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
  padding-bottom: 80px;
`;
const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  padding-bottom: 10px;
  margin: 10px;
`;

function MyChallenges({
  challenges,
  onJoinChallenge,
  onUpdateChallenge,
  onCompleteChallenge
}) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const tomorrow = moment()
    .add(1, 'day')
    .startOf('day');
  const time = tomorrow.diff(moment().utc(), 'hours');
  const today = moment().format('YYYY-MM-DD');

  function handleProgressClick(challenge) {
    if (challenge.modified === today) {
      setShowDialog(true);
      return;
    }

    setSelectedChallenge(challenge);
  }

  function handleCheckbox(event) {
    const { value } = event.target;

    if (value === 'yes') {
      const completed = today === selectedChallenge.endDate;

      onUpdateChallenge({
        ...selectedChallenge,
        karma: selectedChallenge.karma + 1,
        streak: selectedChallenge.streak + 1,
        modified: today,
        lastParticipated: today,
        completed,
        joined: !completed
      });

      if (completed) {
        onCompleteChallenge(selectedChallenge);
      }
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
        <Header title="My Challenges" />
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
          {!challenges && <div>You haven't joined any challenges yet.</div>}
        </CardContainer>
        <Menu />
      </Grid>

      {selectedChallenge && (
        <ProgressDialog
          onClose={() => setSelectedChallenge(null)}
          onProgress={handleCheckbox}
        />
      )}

      {showDialog && (
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

MyChallenges.propTypes = {
  challenges: propTypes.array,
  onJoinChallenge: propTypes.func,
  onUpdateChallenge: propTypes.func,
  onCompleteChallenge: propTypes.func
};
export default MyChallenges;
