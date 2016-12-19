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

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', vrMode: false};
    this.changeVRMode = this.changeVRMode.bind(this)
  }

  changeVRMode() {
      console.log("hello")
      this.setState({vrMode: true})
    }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    if (this.state.vrMode) {

      return (
        <Scene>
          <Camera>
            <a-cursor
              animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
            </a-cursor>
          </Camera>

          
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
