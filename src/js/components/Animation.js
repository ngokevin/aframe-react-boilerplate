import React from 'react';

export default class Animation extends React.Component {
  render() {
    return (
      <a-animation {...this.props}></a-animation>
    );
  }
}
