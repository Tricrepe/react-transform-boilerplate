import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
export default (
  <Route path="/" component={ App }>
    <Route path="/home" component={ Home }/>
    <Route path="/work" component={ Work }/>
    <Route path="/contact" component={ Contact }/>
    <IndexRoute component={Home}/>
  </Route>
)
