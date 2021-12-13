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
      <h2>{data.name}</h2>
      <h2>{data.model}</h2>
      <h2>{data.price}</h2>
    </div>
  );
}

export default Cars;
