import React, { useState } from "react";
import {
  Img,
  Img_1,
  Img_2,
  Img_3,
} from "../../assets/images/image";
import "../MyCarousel/Carousel.css";
import Carousel from "react-elastic-carousel";
// import Carousel from "react-bootstrap/Carousel";
function MyCarousel() {
  return (
    <>
      <Carousel className="carousels" itemsToShow={4} >
        <img src={Img} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
        <img src={Img} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
        <img src={Img} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
        <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
      </Carousel>
      {/* <Carousel
        className="carousel"
        prevIcon={
          <span aria-hidden="false" className="carousel-control-prev-icon" />
        }
      >
        <Carousel.Item className="carousel-group">
          <img src={Img} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
        </Carousel.Item>
        <Carousel.Item className="carousel-group">
          <img src={Img} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
        </Carousel.Item>
        <Carousel.Item className="carousel-group">
          <img src={Img} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_1} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_2} className="carousel-one-img" alt="" srcset="" />
          <img src={Img_3} className="carousel-one-img" alt="" srcset="" />
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}

export default MyCarousel;
