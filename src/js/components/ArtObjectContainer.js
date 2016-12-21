import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import ArtObject from '../components/ArtObject'
import { circularPositionFromIndex } from '../../utils/calculations'
import collections from '../../data/collections'
import Sky from './Sky'

// const styles = require('../../scss/Members.scss')
const boxSize = .75

class ArtObjectContainer extends Component {
  render () {
    const artObjects = collections[0]['art_objects']
    const collection = [collections[0]['primary_object']]

    console.log(artObjects)
    if (this.props.vrMode) {
      return (
        <Entity> 
          {collection.map(this.renderCollection.bind(this))}
          { 
            this.props.artCollectionView ? artObjects.map(this.renderCollection.bind(this)) : ""
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

  renderCollection (collection, index) {
    let position = circularPositionFromIndex(index, boxSize)

    return (
      <ArtObject key={index} id={collection.id} name={collection.title} photoUrl={collection.image_url}
              width={boxSize} height={boxSize} depth={boxSize}
              position={position}
              index={index}
              vrMode={this.props.vrMode}
              onCollection={this.props.onCollection} />
    )
  }
}

export default ArtObjectContainer;