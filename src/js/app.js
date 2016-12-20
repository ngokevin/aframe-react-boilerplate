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
          <Sky/>
          <Camera>
            <Cursor color="red" />
          </Camera>
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
