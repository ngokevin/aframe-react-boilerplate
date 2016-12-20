import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Cursor from './components/Cursor';
import ArtObjectContainer from './components/ArtObjectContainer';
import Navigation from './components/Navigation';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', vrMode: false};
    this.changeVRMode = this.changeVRMode.bind(this)
  }

  onNext() {
    console.log("on next")
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
          <Navigation forward={this.onNext} back={this.onPrev} />
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

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
