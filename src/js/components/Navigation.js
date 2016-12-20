import {Entity} from 'aframe-react';
import React from 'react';


class Navigation extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Entity id="nav" position="0 -1.8 0" rotation="90 -90 0">
        <NavLink id="prev" onClick={this.props.back}
                 opacity={0.3} rotation="0 0 0"
                 text="prev" textPosition="0 0.53 -0.1" textRotation="0 180 -90"/>
        <NavLink id="next" onClick={this.props.forward}
                 opacity={0.5} rotation="0 0 180"
                 text="next" textPosition="0 0.40 -0.1" textRotation="0 180 90"/>
      </Entity>
    );
  }
}

function NavLink (props) {
  return (
    <Entity id={props.id} 
      onClick={props.onClick} 
      geometry={{arc: 180, primitive: 'torus', radius: 0.5, radiusTubular: 0.05, segmentsTubular: 60}}
      material={{color: '#FFF', opacity: props.opacity, shader: 'flat', transparent: true}}
      rotation={props.rotation}
    >
      <Entity 
        text={{text: props.text, height: 0.01, size: 0.05}}
        material={{color: '#333', shader: 'flat'}}
        position={props.textPosition}
        rotation={props.textRotation}
      />
    </Entity>
  );
}

export default Navigation;































// export default props => (
//   <Entity
//     geometry={{arc: 180, primitive: 'torus', radius: 0.5, radiusTubular: 0.05,
//                segmentsTubular: 60}}
//     material={{color: '#FFF', shader: 'flat', transparent: true}}
//     rotation="90,0,0"
//     position="0 -1.8 0"/>
// );
