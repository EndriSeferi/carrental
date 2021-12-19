import "./CarCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CarCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Car " />
      <div className="info">
        <div className="title">
          <h2>{props.name}</h2>
        </div>
        <div className="characteristics">
          <div className="group">
            <i className="fa fa-chair" />
            <p>{props.conditions.seats}</p>
          </div>
          <div className="group">
            <i className="fa fa-suitcase" />
            <p>{props.conditions.luggage}</p>
          </div>
          <div className="group">
            <i className="fas fa-gas-pump" />
            <p>{props.conditions.petrol}</p>
          </div>

          {props.conditions.air ==="yes" ? (
            <div className="group">
              <i className="fa fa-snowflake" />
              <p>Air-Condition</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="end">
          <Button variant="dark" className="my-btn">
            <Link to={`/cars/${props.carId}`}>Check me!</Link>
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
