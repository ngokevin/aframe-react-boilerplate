import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import ArtObject from './ArtObject'
import { circularPositionFromIndex } from '../../utils/calculations'
import collections from '../../data/collections'
import Sky from './Sky'
import CollectionArtObject from './CollectionArtObject'

// const styles = require('../../scss/Members.scss')
let collectionBoxSize = 1
let artBoxSize = .75

class ArtObjectContainer extends Component {
  render () {
    
    const artObjects = collections[this.props.artObjectIndex]['art_objects']
    const collectionArray = collections

    // console.log(artObjects)
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
    let position = circularPositionFromIndex(index, artBoxSize)
    console.log(position)

    if(index === this.props.currentArtObject){
      position = {x: 0, y:0, z: 2.3}
      // artBoxSize = 3
    } else{
      let position = circularPositionFromIndex(index, artBoxSize)
      // artBoxSize = .75
    }

    return (
      <ArtObject key={index} id={c.id} 
        name={c.title} 
        photoUrl={c.vr_url}
        width={artBoxSize} 
        height={artBoxSize} 
        depth={artBoxSize}
        position={position}
        index={index}
        vrMode={this.props.vrMode}
        onArtObject={this.props.onArtObject}
              />
    )
  }

  renderCollection (primary_collection, index) {
    let position = circularPositionFromIndex(index, collectionBoxSize)
    let collection = primary_collection['primary_object']
    if (this.props.artObjectIndex !== index && this.props.showAllCollections === false) {
      collectionBoxSize = 0

    } else {
      collectionBoxSize = 1
    }

    return (
      <CollectionArtObject key={index} artObjectIndex={index} 
        id={collection.id} 
        name={collection.title} 
        photoUrl={collection.vr_url}
        width={collectionBoxSize} 
        height={collectionBoxSize} 
        depth={collectionBoxSize}
        position={position}
        index={index}
        vrMode={this.props.vrMode}
        onCollection={this.props.onCollection}
              />
    )
  }
}

export default ArtObjectContainer;