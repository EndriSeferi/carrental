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

      for (const key in responseData) {
        if (responseData[key].id === carUrlId) {
          setData({
            id: key,
            carId: responseData[key].id,
            img: responseData[key].img,
            name: responseData[key].name,
            model: responseData[key].model,
            price: responseData[key].price,
            seats: responseData[key].conditions.seats,
            luggage: responseData[key].conditions.luggage,
            petrol: responseData[key].conditions.petrol,
            manual: responseData[key].conditions.manual,
            air: responseData[key].conditions.air,
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
        <div className="characteristics">
          <div className="group">
            <i className="fa fa-chair" />
            <p>{data.seats}</p>
          </div>
          <div className="group">
            <i className="fa fa-suitcase" />
            <p>{data.luggage}</p>
          </div>
          <div className="group">
            <i className="fas fa-gas-pump" />
            <p>{data.petrol}</p>
          </div>

          {data.air ==="yes" ? (
            <div className="group">
              <i className="fa fa-snowflake" />
              <p>Air-Condition</p>
            </div>
          ) : (
            ""
          )}
          {data.manual ==="yes" ? (
            <div className="group">
              <i className="fa fa-tachometer-alt" />
              <p>Manual</p>
            </div>
          ) : (
            <div className="group">
              <i className="fa fa-tachometer-alt" />
              <p>Automatic</p>
            </div>
          )}
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
