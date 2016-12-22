import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './Camera';
import Text from './Text';
import Sky from './Sky';
import Cursor from './Cursor';
import ArtObjectContainer from './ArtObjectContainer';
import Navigation from './Navigation';

let imageArray = ['https://c2.staticflickr.com/2/1700/24413259604_410edeebde_b.jpg',
                    'http://i.imgur.com/niHC9wI.jpg',
                    'https://c2.staticflickr.com/8/7348/26737615540_da23843fe8_b.jpg',
                    'https://c1.staticflickr.com/9/8308/29687569852_97f82c0238_b.jpg',
                    'https://c2.staticflickr.com/8/7042/6979883093_04f7667241_b.jpg', 
                    'https://c2.staticflickr.com/8/7568/28735194290_c75d2b0bca_b.jpg',
                    'https://c2.staticflickr.com/2/1669/24141478864_d2c6635538_b.jpg',
                    'https://c2.staticflickr.com/2/1404/5115778927_4c89f683a1_b.jpg',
                    'https://c2.staticflickr.com/6/5346/30914508181_e97b577423_b.jpg'
                    ]


class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red', 
      vrMode: false, 
      assetIndex: 0, 
      selectedImage: imageArray[0], 
      artCollectionView: false,
      artObjectIndex: 0,
      showAllCollections: true,
      artOnly: false,
      currentArtObject: null
    };
    this.changeVRMode = this.changeVRMode.bind(this)
    this.onCollection = this.onCollection.bind(this)
    this.onArtObject = this.onArtObject.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  onNext() {
    console.log("on next")
    let indexIncrement = this.state.assetIndex + 1
    this.setState({assetIndex: indexIncrement, selectedImage: imageArray[indexIncrement]})
  }

  onPrev() {
    console.log("on prev")
    let indexIncrement = this.state.assetIndex - 1
    this.setState({assetIndex: indexIncrement, selectedImage: imageArray[indexIncrement]})
  }
  
  changeVRMode() {
    this.setState({vrMode: true})
  }

  exitVRMode() {
    this.setState({vrMode: false})
  }

  onCollection(artObjectIndex) {
    this.setState({artObjectIndex: artObjectIndex})
    if (this.state.artCollectionView == false)
      this.setState({
        artCollectionView: true, 
        showAllCollections: false
      })
    else 
      this.setState({
        artCollectionView: false, 
        showAllCollections: true
      })
  }

  onArtObject(objectIndex){
    console.log("art click", objectIndex)
    this.setState({
      artOnly: true,
      currentArtObject: objectIndex})
  }

  goBack() {
    console.log("back")
  }

  render () {
    if (this.state.vrMode) {

      return (
        <Scene>
          <Sky selectedImage={this.state.selectedImage}/>
          <Camera>
            <Cursor color="red" />
          </Camera>
          <Navigation 
            forward={this.onNext.bind(this)} 
            back={this.onPrev.bind(this)}
            exit={this.exitVRMode.bind(this)} />
          <ArtObjectContainer 
            showAllCollections={this.state.showAllCollections}
            artObjectIndex={this.state.artObjectIndex} 
            vrMode={this.state.vrMode} 
            artCollectionView={this.state.artCollectionView} 
            artOnly={this.state.artOnly}
            onCollection={this.onCollection}
            onArtObject ={this.onArtObject}
            currentArtObject={this.state.currentArtObject} />
        </Scene>
      );
    } else {
      return (
        <div>
          <button onClick={this.changeVRMode}>VR Mode</button>
        </div>
      )
    }
  }
}

export default VRScene;