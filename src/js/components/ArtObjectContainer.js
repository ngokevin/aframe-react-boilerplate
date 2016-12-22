import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import ArtObject from './ArtObject'
import { circularPositionFromIndex } from '../../utils/calculations'
import collections from '../../data/collections'
import Sky from './Sky'

// const styles = require('../../scss/Members.scss')
const boxSize = .75

class ArtObjectContainer extends Component {
  render () {
    const artObjects = collections[0]['art_objects']
    const collectionArray = collections

    console.log(artObjects)
    if (this.props.vrMode) {
      return (
        <Entity> 
          {collectionArray.map(this.renderCollection.bind(this))}
          { 
            this.props.artCollectionView ? artObjects.map(this.renderArtObjects.bind(this)) : ""
          }
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

  renderArtObjects (c, index) {
    let position = circularPositionFromIndex(index, boxSize)

    return (
      <ArtObject key={index} id={c.id} name={c.title} photoUrl={c.vr_url}
              width={boxSize} height={boxSize} depth={boxSize}
              position={position}
              index={index}
              vrMode={this.props.vrMode}
              onCollection={this.props.onCollection} />
    )
  }

  renderCollection (primary_collection, index) {
    let position = circularPositionFromIndex(index, boxSize)
    let collection = primary_collection['primary_object']

    return (
      <ArtObject key={index} id={collection.id} name={collection.title} photoUrl={collection.vr_url}
              width={boxSize} height={boxSize} depth={boxSize}
              position={position}
              index={index}
              vrMode={this.props.vrMode}
              onCollection={this.props.onCollection} />
    )
  }
}

export default ArtObjectContainer;