import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.01,
    radiusOuter: 0.016
  };
  const material = {
    color: props.color,
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity cursor={props} geometry={geometry} material={material}
            position="0 0 -1"/>
  );
}
