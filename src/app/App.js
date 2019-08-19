import React, { useState, useEffect } from 'react';
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
import userData from '../pages/__mock__/user.json';
import {
  getFromLocal,
  setToLocal,
  getChallenges,
  postChallenge,
  patchChallenge,
  deleteChallenge
} from '../services';
import * as moment from 'moment';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`;

function App() {
  const [challenges, setChallenges] = useState([]);
  const [activeUser, setActiveUser] = useState(
    getFromLocal('activeUser') || userData
  );

  React.useEffect(() => {
    loadChallenges();
  }, [challenges]);

  const [user, setUser] = useState(getFromLocal('user') || userData);
  useEffect(() => setToLocal('user', user), [user]);
  useEffect(() => setToLocal('challenges', challenges), [challenges]);
  useEffect(() => setToLocal('activeUser', activeUser), [activeUser]);

  async function loadChallenges() {
    setChallenges(await getChallenges());
  }

  function updateChallengeInState(data) {
    const index = challenges.findIndex(challenge => challenge._id === data._id);
    setChallenges([
      ...challenges.slice(0, index),
      data,
      ...challenges.slice(index + 1)
    ]);
  }

  function handleJoinChallenge(id) {
    const today = moment().format('YYYY-MM-DD');
    const index = challenges.findIndex(challenge => challenge._id === id);

    const challengeToChange = challenges[index];

    const challenge = {
      ...challengeToChange,
      joined: !challengeToChange.joined,
      startDate: today,
      lastParticipated: today,
      endDate: moment(today)
        .add(challengeToChange.duration, 'days')
        .format('YYYY-MM-DD')
    };

    if (challengeToChange.joined === true) {
      challenge.karma = 0;
      challenge.streak = 0;
    }

    patchChallenge(challenge, challenge._id).then(result =>
      updateChallengeInState(result)
    );
  }

  function handleDeleteChallenge(id) {
    deleteChallenge(id).then(result => {
      const index = challenges.findIndex(challenge => challenge._id === id);
      setChallenges([
        ...challenges.slice(0, index),
        ...challenges.slice(index + 1)
      ]);
    });
  }

  function handleCreate(challenge) {
    postChallenge(challenge).then(result =>
      setChallenges([result, ...challenges])
    );
  }

  function handleUpdateChallenge(challenge) {
    patchChallenge(challenge, challenge._id).then(result =>
      updateChallengeInState(result)
    );
  }

  function handleLogin(formValues) {
    const profile = formValues.user_name;
    const index = user.findIndex(user => user.user_name === profile);
    setActiveUser(user[index]);
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
                activeUser={activeUser}
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
                challenges={challenges.filter(challenge => !challenge.joined)}
                onJoinChallenge={handleJoinChallenge}
                onDeleteChallenge={handleDeleteChallenge}
              />
            )}
          />
          <Route
            path="/myChallenges"
            render={props => (
              <MyChallenges
                activeUser={activeUser}
                challenges={challenges.filter(challenge => challenge.joined)}
                onJoinChallenge={handleJoinChallenge}
                onUpdateChallenge={handleUpdateChallenge}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login onLogin={handleLogin} activeUser={activeUser} {...props} />
            )}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
