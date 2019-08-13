import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import MyChallenges from '../pages/MyChallenges';
import CreateChallenge from '../pages/Create';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing';
import NewsFeed from '../pages/News';
import Login from '../pages/Login';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';
import { getFromLocal, setToLocal } from '../services';
import * as moment from 'moment';
import uuid from 'uuid/v1';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`;

function App() {
  const [challenges, setChallenges] = useState(
    getFromLocal('challenges') || challengeData
  );

  React.useEffect(() => setToLocal('challenges', challenges), [challenges]);

  function handleJoinChallenge(id) {
    const today = moment().format('YYYY-MM-DD');
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
          .format('YYYY-MM-DD')
      },
      ...challenges.slice(index + 1)
    ]);
  }

  function handleDeleteChallenge(id) {
    const newChallenges = challenges.filter(challenge => {
      return challenge._id !== id;
    });
    setChallenges(newChallenges);
  }

  function handleCreate(challenge) {
    const newChallenge = { _id: uuid(), ...challenge };
    setChallenges([newChallenge, ...challenges]);
  }

  async function handleUpdateChallenge(challenge) {
    const index = challenges.findIndex(item => item._id === challenge._id);
    setChallenges([
      ...challenges.slice(0, index),
      challenge,
      ...challenges.slice(index + 1)
    ]);
    console.log('app');
  }

  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/news" component={NewsFeed} />
          <Route
            path="/create"
            render={props => (
              <CreateChallenge onCreate={handleCreate} {...props} />
            )}
          />
          )} />
          <Route
            path="/profile"
            render={props => (
              <Profile
                challenges={challenges.filter(challenge => challenge.joined)}
                {...props}
              />
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
                onDeleteChallenge={handleDeleteChallenge}
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
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
