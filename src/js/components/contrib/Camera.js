import React from 'react';
import Entity from '../Entity';

export default class Camera extends React.Component {
  render() {
    return (
      <Entity>
        <Entity camera look-controls wasd-controls {...this.props}/>
      </Entity>
    );
  }
}
