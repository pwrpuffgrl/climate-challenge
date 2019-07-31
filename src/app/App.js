import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/challenges';
import MyChallenges from '../pages/myChallenges';
import Landing from '../pages/landing';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';
import { getFromLocal, setToLocal } from '../services';

function App() {
  const [challenges, setChallenges] = useState(
    getFromLocal('challenges') || challengeData
  );

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var today = year + '-' + month + '-' + date;

  React.useEffect(() => setToLocal('challenges', challenges), [challenges]);

  function handleJoinChallenge(id) {
    const index = challenges.findIndex(challenge => challenge._id === id);
    const challenge = challenges[index];
    setChallenges([
      ...challenges.slice(0, index),
      { ...challenge, joined: !challenge.joined, startDate: today },
      ...challenges.slice(index + 1)
    ]);
  }

  function handleShowDate(challenge) {
    console.log('date', challenge.startDate);
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/challenges"
            render={props => (
              <Challenges
                challengeData={challenges}
                onJoinChallenge={handleJoinChallenge}
                onShowDate={handleShowDate}
              />
            )}
          />
          <Route
            path="/myChallenges"
            render={props => (
              <MyChallenges
                challenges={challenges.filter(
                  challenge => challenge.joined === true
                )}
                onJoinChallenge={handleJoinChallenge}
                onShowDate={handleShowDate}
              />
            )}
          />
          <Route path="/" render={props => <Landing />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
