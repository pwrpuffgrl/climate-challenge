import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';

function App() {
  const [challenges, setChallenges] = useState(challengeData);
  const [joined, setJoined] = useState(false);

  function handleJoinChallenge(challenge) {
    setChallenges(challenges);
    console.log(challenge);
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
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
