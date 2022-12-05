import React, { useState } from 'react'
import { Scailnew_1 } from '../../assets/images/image'
import "../MyCarousel/Carousel.css"
import { Carousel } from 'react-responsive-carousel';
import "bear-react-carousel/dist/index"
function MyCarousel() {

  return (
    <>
      <Carousel>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  )
}

export default MyCarousel