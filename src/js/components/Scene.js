import React from 'react';

export default class Scene extends React.Component {
  render() {
    return (
      <a-scene>{this.props.children}</a-scene>
    );
  }
}
