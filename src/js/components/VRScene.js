import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './Camera';
import Text from './Text';
import Sky from './Sky';
import Cursor from './Cursor';
import ArtObjectContainer from './ArtObjectContainer';
import Navigation from './Navigation';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', vrMode: false, assetIndex: 0};
    this.changeVRMode = this.changeVRMode.bind(this)
  }

  onNext() {
    console.log("on next")
    this.setState({assetIndex: this.state.assetIndex + 1})
  }

  onPrev() {
    console.log("on prev")
  }
  
  changeVRMode() {
    this.setState({vrMode: true})
  }

  render () {
    if (this.state.vrMode) {

      return (
        <Scene>
          <Sky />
          <Camera>
            <Cursor color="red" />
          </Camera>
          <Navigation forward={this.onNext.bind(this)} back={this.onPrev} />
          <ArtObjectContainer vrMode={this.state.vrMode} />
        </Scene>
      );
    } else {
      return (
        <div>
          <button onClick={this.changeVRMode}>VR Mode</button>
        </div>
      )
    }
  }
}

export default VRScene;