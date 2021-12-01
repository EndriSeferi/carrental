import React from "react";
import "./MyCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarCard from "./CarCard";
function MyCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="big-carousel">
      <h2>--------OUR BEST CARS</h2>
      <Carousel responsive={responsive} showDots={true} className="carousel">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
