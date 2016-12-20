import {Entity} from 'aframe-react';
import React from 'react';

class Sky extends React.Component {

  render() {

    const imageArray = ['https://c2.staticflickr.com/2/1700/24413259604_410edeebde_b.jpg',
                        'https://c2.staticflickr.com/8/7348/26737615540_da23843fe8_b.jpg',
                        'https://c1.staticflickr.com/9/8308/29687569852_97f82c0238_b.jpg',
                        'https://c2.staticflickr.com/8/7042/6979883093_04f7667241_b.jpg', 
                        'https://c2.staticflickr.com/6/5554/30613859743_083e6e97a6_b.jpg',
                        'https://c2.staticflickr.com/8/7568/28735194290_c75d2b0bca_b.jpg',
                        'https://c2.staticflickr.com/2/1669/24141478864_d2c6635538_b.jpg',
                        'https://c2.staticflickr.com/2/1404/5115778927_4c89f683a1_b.jpg',
                        'https://c2.staticflickr.com/6/5346/30914508181_e97b577423_b.jpg'
                        ]
                        
    // const currentImage = imageArray(imageIndex)

    return (
      <Entity
        geometry={{primitive: 'sphere', radius: 5000}}
        material={{shader: 'flat', src: 'url(https://c2.staticflickr.com/8/7568/16061958508_9c3c27b08e_b.jpg)'}}
        scale="1 1 -1"/>
    )
  }
}

export default Sky;