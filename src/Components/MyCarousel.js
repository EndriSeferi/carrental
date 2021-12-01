import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyCarousel.css";
function MyCarousel() {
  return (
    <div className="big-carousel">
      <h2>--------OUR BEST CARS</h2>
      <Carousel>
        <Carousel.Item interval={2000} className="carousel__item">
          <img
            className="carousel__image"
            src="https://mpng.subpng.com/20190207/gbf/kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c357592c695.7212954215495468696012.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel__image"
            src="https://mpng.subpng.com/20190207/gbf/kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c357592c695.7212954215495468696012.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel__image"
            src="https://mpng.subpng.com/20190207/gbf/kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c357592c695.7212954215495468696012.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
