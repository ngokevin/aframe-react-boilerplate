import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import VRScene from './components/VRScene'

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
      <Route path="/" component={ VRScene }>
        {/* <IndexRoute component={ Home }></IndexRoute> */}
        <Route path="/users/:userId/collections" component={ VRScene }></Route>
      </Route>
    </Router>
);



ReactDOM.render(router, document.querySelector('.scene-container'));
