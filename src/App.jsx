import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { CenteredLayoutRoute } from './layouts'

import Game from './components/Game'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <CenteredLayoutRoute path="*" component={ Game } />
        </Switch>
      </Router>
    );
  }
}

export default App
