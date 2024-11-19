import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Componet/Img/1.jpg';
import img2 from '../Componet/Img/2.jpg';
import img3 from '../Componet/Img/3.jpg';
import './Main.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



function Main() {
  return (
    
        <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Main