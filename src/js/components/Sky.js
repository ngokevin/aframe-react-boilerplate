import {Entity} from 'aframe-react';
import React from 'react';

export default class Sky extends React.Component {
  render() {
    return (
      <Entity geometry={{primitive: 'sphere', radius: 5000}}
              material={{color: "#73CFF0", shader: 'flat'}}
              scale="1 1 -1"/>
    );
  }
}
