import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SevenDays from './components/SevenDays';
import About from './components/About';
import Search from './components/Search';
import Current from './components/Current';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Current} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sevenDays" component={SevenDays} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
