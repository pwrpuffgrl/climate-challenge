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
import {
  getFromLocal,
  setToLocal,
  getChallenges,
  postChallenge,
  patchChallenge,
  deleteChallenge,
  getUser,
  patchUser
} from '../services';
import * as moment from 'moment';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`;

function App() {
  const [challenges, setChallenges] = useState([]);

  const [user, setUser] = useState([]);
  const [activeUser, setActiveUser] = useState(
    getFromLocal('activeUser') || {}
  );

  React.useEffect(() => {
    async function loadChallenges() {
      setChallenges(await getChallenges());
    }

    loadChallenges();
  }, []);

  React.useEffect(() => {
    async function loadUser() {
      setUser(await getUser());
    }

    loadUser();
  }, []);

  useEffect(() => setToLocal('activeUser', activeUser), [activeUser]);
  useEffect(() => {
    async function updateUser() {
      const result = await patchUser(activeUser, activeUser._id);
      setUser(result);
    }

    updateUser();
  }, [activeUser]);

  async function handleJoinChallenge(id) {
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

    if (!challenge.joined) {
      challenge.karma = 0;
      challenge.streak = 0;
      challenge.startDate = null;
      challenge.endDate = null;
      challenge.modified = null;
      challenge.lastParticipated = null;
    }

    const patchedChallenges = await patchChallenge(challenge, challenge._id);
    setChallenges(patchedChallenges);
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

  async function handleUpdateChallenge(challenge) {
    setActiveUser({
      ...activeUser,
      karmaPoints: activeUser.karmaPoints + 1
    });
    const patchedChallenges = await patchChallenge(challenge, challenge._id);
    setChallenges(patchedChallenges);
  }

  async function handleCompleteChallenge(challenge) {
    setActiveUser({
      ...activeUser,
      karmaPoints: activeUser.karmaPoints + challenge.karma
    });
    const patchedUser = await patchUser(activeUser, activeUser._id);
    setUser(patchedUser);
  }

  function handleLogin(formValues) {
    console.log('login!');
    const profile = formValues.user_name;
    const index = user.findIndex(user => user.user_name === profile);
    setActiveUser(user[index]);
  }

  const myChallenges = challenges.filter(challenge => challenge.joined);

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
                challenges={myChallenges}
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
                challenges={myChallenges}
                onJoinChallenge={handleJoinChallenge}
                onUpdateChallenge={handleUpdateChallenge}
                onCompleteChallenge={handleCompleteChallenge}
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
