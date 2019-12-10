import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Notfound from "./routes/Notfound";
import Success from "./routes/Success";
import Error from "./routes/Error";
import Blog from "./routes/Blog";
import Projects from "./routes/Projects";
import './styles/Common.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/blog" component={Blog} />
      <Route component={Notfound} />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
