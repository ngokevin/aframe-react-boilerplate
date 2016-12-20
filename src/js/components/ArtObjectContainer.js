import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import ArtObject from '../components/ArtObject'
import { circularPositionFromIndex } from '../../utils/calculations'
import collections from '../../data/collections'
import Sky from './Sky'

// const styles = require('../../scss/Members.scss')
const boxSize = 1.75

class ArtObjectContainer extends Component {
  render () {
    const artObjects = collections[0]['art_objects'].slice(0,3)
    console.log(artObjects)
    if (this.props.vrMode) {
      return (
        <Entity>
          <Sky />
          {artObjects.map(this.renderCollection.bind(this))}
        </Entity>
      )
    } else {
      return (
        <div className="members-container">
          {members.map(this.renderMember.bind(this))}
        </div>
      )
    }
  }

  renderCollection (collection, index) {
    let position = circularPositionFromIndex(index, boxSize)

    return (
      <ArtObject key={index} id={collection.id} name={collection.title} photoUrl={collection.thumbnail_url}
              width={boxSize} height={boxSize} depth={boxSize}
              position={position}
              index={index}
              vrMode={this.props.vrMode} />
    )
  }
}

export default ArtObjectContainer;