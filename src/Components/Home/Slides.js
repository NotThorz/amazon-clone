import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
const Slides = () => {
    return (
        <div>
<Carousel pause={false}>
  <Carousel.Item>
    <img
      className="home__image"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home__image "
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home__image"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  </Carousel>
        </div>
    )
}

export default Slides
