import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import MyChallenges from '../pages/MyChallenges';
import CreateChallenge from '../pages/Create';
import Landing from '../pages/Landing';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';
import { getFromLocal, setToLocal } from '../services';
import * as moment from 'moment';
import uuid from 'uuid/v1';

import Background from '../Images/AppBackground.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Background});
  background-size: cover;
`;

function App() {
  const [challenges, setChallenges] = useState(
    getFromLocal('challenges') || challengeData
  );

  React.useEffect(() => setToLocal('challenges', challenges), [challenges]);

  function handleJoinChallenge(id) {
    const today = moment().toISOString();
    const index = challenges.findIndex(challenge => challenge._id === id);
    const challenge = challenges[index];
    setChallenges([
      ...challenges.slice(0, index),
      {
        ...challenge,
        joined: !challenge.joined,
        startDate: today,
        lastParticipated: today,
        endDate: moment(today)
          .add(challenge.duration, 'days')
          .toISOString() // TODO: remove
      },
      ...challenges.slice(index + 1)
    ]);
  }

  function handleCreate(challenge) {
    const newChallenge = { _id: uuid(), ...challenge };
    setChallenges([newChallenge, ...challenges]);
  }

  function handleUpdateChallenge(challenge) {
    const index = challenges.findIndex(item => item._id === challenge._id);
    setChallenges([
      ...challenges.slice(0, index),
      challenge,
      ...challenges.slice(index + 1)
    ]);
  }

  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/create"
            render={props => (
              <CreateChallenge onCreate={handleCreate} {...props} />
            )}
          />
          )} />
          <Route
            path="/challenges"
            render={props => (
              <Challenges
                challengeData={challenges.filter(
                  challenge => !challenge.joined
                )}
                onJoinChallenge={handleJoinChallenge}
              />
            )}
          />
          <Route
            path="/myChallenges"
            render={props => (
              <MyChallenges
                challenges={challenges.filter(challenge => challenge.joined)}
                onJoinChallenge={handleJoinChallenge}
                onUpdateChallenge={handleUpdateChallenge}
              />
            )}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
