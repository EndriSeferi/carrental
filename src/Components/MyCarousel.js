import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://elitecarrental-9c650-default-rtdb.europe-west1.firebasedatabase.app/car.json"
      );
      const responseData = await response.json();
      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: key,
          carId: responseData[key].id,
          img: responseData[key].img,
          name: responseData[key].name,
          model: responseData[key].model,
          price: responseData[key].price,
          conditions: responseData[key].conditions

        });
      }
      setData(loadedData);
    };
    fetchMeals();
  }, []);

  return (
    <div className="big-carousel">
      <h2 className="best__cars">OUR BEST CARS</h2>
      <Carousel responsive={responsive} showDots={true} className="carousel">
        {data.map((car, index) => {
          return (
            <CarCard
              key={index}
              carId={car.carId}
              image={car.img}
              name={car.name}
              model={car.model}
              price={car.price}
              conditions={car.conditions}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
