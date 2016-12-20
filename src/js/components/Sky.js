import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 5000}}
    material={{shader: 'flat', src: 'url(https://c4.staticflickr.com/1/462/31706123075_7abb2a4ba9_o.jpg)'}}
    scale="1 1 -1"/>
);



// geometry="primitive: sphere;
//           radius: ${radius};
//           segmentsWidth: ${segments-width};
//           segmentsHeight: ${segments-height}"
// material="shader: flat;
//           src: url(${src});
//           color: ${color};
//           fog: false"
// scale="-1 1 1">
