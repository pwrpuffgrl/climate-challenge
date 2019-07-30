import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import MyChallenges from '../pages/MyChallenges';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';
import { getFromLocal, setToLocal } from '../services';

function App() {
  const [challenges, setChallenges] = useState(
    getFromLocal('challenges') || challengeData
  );
  const [duration, setDuration] = useState(getFromLocal('duration'));

  React.useEffect(() => setToLocal('challenges', challenges), [challenges]);

  function handleJoinChallenge(id) {
    const index = challenges.findIndex(challenge => challenge._id === id);
    const challenge = challenges[index];
    setChallenges([
      ...challenges.slice(0, index),
      { ...challenge, joined: !challenge.joined },
      ...challenges.slice(index + 1)
    ]);
    console.log(challenges);
  }

  function handleShowDuration(duration) {
    console.log(duration);
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/Challenges"
            render={props => (
              <Challenges
                challengeData={challenges}
                onJoinChallenge={handleJoinChallenge}
                onShowDuration={handleShowDuration}
              />
            )}
          />
          <Route
            path="/MyChallenges"
            render={props => (
              <MyChallenges
                challenges={challenges.filter(
                  challenge => challenge.joined === true
                )}
                onJoinChallenge={handleJoinChallenge}
                onShowDuration={handleShowDuration}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
