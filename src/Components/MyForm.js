import React from "react";
import { Button } from "react-bootstrap";
import "./MyForm.css";
function MyForm() {
  return (
    <div className="form-container">
      <h2>Elite Rental Cars</h2>
      <form>
        <div className="form__inputs">
          <div className="input-icons">
            <i className="fa fa-map-marker icon"></i>
            <input className="input-field" type="text" placeholder="Enter location here..." />
            <div className="dates">
              <input type="date" name="date" />
              <input type="date" name="date" />
            </div>
          </div>
        </div>
        <Button variant="dark" className="my-btn">
          Check For Cars!
        </Button>
      </form>
    </div>
  );
}

export default MyForm;
