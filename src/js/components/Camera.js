import {Entity} from 'aframe-react';

export default props => (
  <Entity>
    <Entity camera look-controls wasd-controls {...props}/>
  </Entity>
);
