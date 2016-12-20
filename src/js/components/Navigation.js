import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{arc: 180, primitive: 'torus', radius: 0.5, radiusTubular: 0.05,
               segmentsTubular: 60}}
    material={{color: '#FFF', shader: 'flat', transparent: true}}
    rotation="90,0,0"
    position="0 -1.8 0"/>
);
