import {Entity} from 'aframe-react';
import React from 'react';

export default class Light extends React.Component {
  render() {
    return (
      <Entity light={this.props}></Entity>
    );
  }
}
