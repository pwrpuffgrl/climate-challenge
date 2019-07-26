import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Challenges from '../pages/Challenges';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/Challenges" exact component={Challenges} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
