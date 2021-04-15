import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopPage from './pages/TopPage'

function App() {
  return (
    <Router>
      <header />
      <Switch>
        <Route exact path='/' component={TopPage} />
      </Switch>
    </Router>
  );
}
export default App
