import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import GlobalStyle from './GlobalStyle';
import cardData from '../pages/__mock__/cards.json';

function App() {
  const [data, setData] = useState(cardData);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/Challenges"
            render={props => <Challenges cardData={data} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
