import React from "react";
import "./CarCard.css";
import { Button } from "react-bootstrap";

function CarCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Car " />
      <div className="info">
        <div className="title">
          <h2>{props.name}</h2>
          <div className="tag-reservation">Reserved</div>
        </div>
        <div className="characteristics">
          <div className="group">
            <i className="fa fa-map-marker" />
            <p>text</p>
          </div>
          <div className="group">
            <i className="fa fa-map-marker" />
            <p>text</p>
          </div>
          <div className="group">
            <i className="fa fa-map-marker" />
            <p>text</p>
          </div>
          <div className="group">
            <i className="fa fa-map-marker" />
            <p>text</p>
          </div>
        </div>
        <div className="end">
          <Button variant="dark" className="my-btn">
            Check Me!
          </Button>
          <div className="price">
            <p>Price</p>
            <h4>{props.price}$/day</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
