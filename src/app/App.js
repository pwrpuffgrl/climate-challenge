import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import MyChallenges from '../pages/MyChallenges';
import Landing from '../pages/Landing';
import GlobalStyle from './GlobalStyle';
import challengeData from '../pages/__mock__/cards.json';
import { getFromLocal, setToLocal } from '../services';
import * as moment from 'moment';

import Background from '../Images/AppBackground.png';

const BackgroundImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  filter: brightness(0.8) saturate(1.5);
  position: fixed;
`;

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
      {
        ...challenge,
        joined: !challenge.joined,
        startDate: moment(today),
        endDate: moment(today).add(14, 'days')
      },
      ...challenges.slice(index + 1)
    ]);
    console.log(challenge.startDate, challenge.endDate);
  }

  function handleShowDate(challenge) {
    console.log('date', challenge.startDate);
  }

  return (
    <>
      <Router>
        <BackgroundImage src={Background} />
        <GlobalStyle />
        <Switch>
          <Route
            path="/challenges"
            render={props => (
              <Challenges
                challengeData={challenges.filter(
                  challenge => !challenge.joined
                )}
                onJoinChallenge={handleJoinChallenge}
                onShowDate={handleShowDate}
              />
            )}
          />
          <Route
            path="/myChallenges"
            render={props => (
              <MyChallenges
                challenges={challenges.filter(challenge => challenge.joined)}
                onJoinChallenge={handleJoinChallenge}
                onShowDate={handleShowDate}
              />
            )}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
