import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/album/1.jpg'
import img2 from '../assets/album/2.jpg'
import img3 from '../assets/album/3.jpg'
import img4 from '../assets/album/4.jpg'
import img5 from '../assets/album/5.jpg'
import img6 from '../assets/album/6.jpg'

function DarkCarousel() {
  const imgArray = [img1, img2, img3, img4, img5, img6]
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div className="carousel">
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval="3000"
      controls={false}
      fade={true}
      variant="dark"
      style={{ maxHeight: '260px', maxWidth: '390px' }}
    >
      {imgArray.map((img, index) => (
        <Carousel.Item key={index}>
          <figure>
          <img
            className="d-block w-[390px]"
            src={img}
            style={{ maxHeight: '260px', maxWidth: '390px' }}
            alt="First slide"
          />
          </figure>
          
        </Carousel.Item>
      ))}
    </Carousel>
    <div className='carousel-count'>{index + 1} of 6</div>
    </div>
  )
}

export default DarkCarousel
