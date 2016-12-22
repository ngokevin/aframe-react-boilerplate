import {Entity} from 'aframe-react';
import React from 'react';

class Sky extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const {selectedImage} = this.props;
    console.log(selectedImage)
    return (
      <Entity
        geometry={{primitive: 'sphere', radius: 5000}}
        material={{shader: 'flat', src: `url(${selectedImage})`}}
        scale="1 1 -1"/>
    )
  }
}

export default Sky;