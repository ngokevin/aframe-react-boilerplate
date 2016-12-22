import {Entity} from 'aframe-react';
import React from 'react';

export default props => {

  return (
    <Entity 
        begin="click" 
        attribute="rotation" 
        to="0 360 0"
        easing="linear" 
        dur="2000" 
        fill="backwards"
    />
  );
}