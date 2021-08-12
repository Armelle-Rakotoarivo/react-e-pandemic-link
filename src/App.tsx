import React from 'react';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Stats } from './components/Stats';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/stat' exact component={Stats}/>
      </Switch>
    </Router>
  );
}

export default App;
