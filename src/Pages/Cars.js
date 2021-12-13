import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Cars.css";
function Cars() {
  let { carUrlId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch(
        "https://elitecarrental-9c650-default-rtdb.europe-west1.firebasedatabase.app/car.json"
      );
      const responseData = await response.json();
      const loadedData = [];

      for (const key in responseData) {
        if (responseData[key].id === carUrlId) {
          setData({
            id: key,
            carId: responseData[key].id,
            img: responseData[key].img,
            name: responseData[key].name,
            model: responseData[key].model,
            price: responseData[key].price,
          });
        }
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="car">
      <img src={data.img} alt="Selected Car Image" />
      <div className="car-info">
        <h1>{data.name}</h1>
        <h3>Model: {data.model}</h3>
        <div className="conditions">
            <p>Persons</p>
            <p>Bags</p>
            <p>Automatic</p>
            <p>Petrol</p>
            <p>Air-Condition</p>
        </div>
        <div className="price">
          <h2>{data.price}$</h2>
          Price/day
        </div>
      </div>
      <div className="card-reservation">
      <input type="location" placeholder="Location" />
          <input type="date"  />
          <input type="date"  />
          <button>Reserve</button>
      </div>
    </div>
  );
}

export default Cars;
