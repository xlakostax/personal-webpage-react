import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './routes/About';
import Contacts from './routes/Contacts';
import Home from './routes/Home';
import Notes from './routes/Notes';
import NotFound from './routes/NotFound';
import Policy from './routes/Policy';
import Work from './routes/Work';
import './styles/index.css';

const routing = (
  <Router>
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/work' component = {Work} />
      <Route exact path = '/about' component = {About} />
      <Route exact path = '/contacts' component = {Contacts} />
      <Route exact path = '/notes' component = { Notes } />
      <Route exact path = '/policy' component = { Policy } />
      <Route path = '*' component = { NotFound } />  {/* For correct 404 rendering use attribute path = '*' */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
