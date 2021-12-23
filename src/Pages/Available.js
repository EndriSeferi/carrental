import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pages.css";
function Available() {
  let { dates } = useParams();
  const available_dates = dates.split("-");

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchReservedInformation = async () => {
      const response = await fetch(
        "https://elitecarrental-9c650-default-rtdb.europe-west1.firebasedatabase.app/reservation.json"
      );
      const responseData = await response.json();
      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          name:responseData[key].name
        });
      }
      setData(loadedData);
    };
    fetchReservedInformation();
  }, []);
  return <div className="sector">{data[0].start}</div>;
}

export default Available;
