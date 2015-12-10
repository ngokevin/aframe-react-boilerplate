import React from 'react';
import Entity from '../Entity';

export default class Light extends React.Component {
  render() {
    return (
      <Entity light={this.props}></Entity>
    );
  }
}
