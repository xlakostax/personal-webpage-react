import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './routes/About';
import Contacts from './routes/Contacts';
import Home from './routes/Home';
import Notfound from './routes/Notfound';
import Blog from './routes/Blog';
import Projects from './routes/Projects';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/projects' component = {Projects} />
      <Route exact path = '/about' component = {About} />
      <Route exact path = '/contacts' component = {Contacts} />
      <Route exact path = '/blog' component = { Blog } />
      <Route path = '*' component = { Notfound } />  {/* For correct 404 rendering use attribute path = '*' */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
