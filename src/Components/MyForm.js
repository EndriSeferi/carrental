import React from "react";
import { Button } from "react-bootstrap";
import "./MyForm.css";
function MyForm() {
  var today = new Date().toISOString().split("T")[0];
console.log(today);
  return (
    <div className="form-container">
      <h2>Elite Rental Cars</h2>
      <form>
        <div className="form__inputs">
          <div className="input-icons">
            <i className="fa fa-map-marker icon"></i>
            <input
              className="input-field"
              type="text"
              placeholder="Enter location here..."
            />
            <div className="labels">
            <label>Start Date</label>
            <label>End Date</label>
            </div>
            <div className="dates">
              <input type="date" min={today} name="date" />
              <input type="date" min={today} name="date" />
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
