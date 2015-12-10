import {Entity} from 'aframe-react';
import React from 'react';

export default class Camera extends React.Component {
  render() {
    return (
      <Entity>
        <Entity camera look-controls wasd-controls {...this.props}/>
      </Entity>
    );
  }
}
