import '@mozvr/aframe-core';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Light from './components/Light';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
  render () {
    return (
      <Scene>
        <Camera/>

        <Sky/>

        <Light type="ambient" color="#888"/>
        <Light type="directional" intensity="0.5" position="-1 1 0"/>
        <Light type="directional" intensity="1" position="1 1 0"/>

        <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
