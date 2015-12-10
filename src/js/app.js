require('@mozvr/aframe-core');
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Animation from './components/Animation';
import Entity from './components/Entity';
import Scene from './components/Scene';
import Camera from './components/contrib/Camera';
import Light from './components/contrib/Light';
import Sky from './components/contrib/Sky';

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
