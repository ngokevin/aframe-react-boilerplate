import React, {Component} from 'react'
import {Entity} from 'aframe-react'

class CollectionArtObject extends Component {
  render () {
    const { id, name, photoUrl } = this.props

    if (this.props.vrMode) {
      const { width, height, depth } = this.props
      const { x, y, z } = this.props.position
      const color = ""

      return (
        <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
                material={{src: `url(${photoUrl})`, color}}
                position={`${x} ${y} ${z}`}
                onClick={this.props.onCollection.bind(null, this.props.artObjectIndex)}/>
      )

    } else {

      return (
        <div onClick={() => {this.props.onClick(id) }} title={name}>
          <img src={photoUrl} width="100" height="100" />
        </div>
      )

    }
  }
}

export default CollectionArtObject;
