import React, { useReducer } from "react";
import { Form, FormCheck, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const LargeFormWithReducer = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    city: "",
    course: "",
    gander: null,
    checked: false
  };

  const reducer = (state, action) => {
    console.log(action)
    if(action.type == "INPUT"){
      

    }

  };

  const submit = (event)=>{
    event.preventDefault();

    console.log(state)

  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container mt-5">
      <form onSubmit={submit} className="row g-3 bg-success p-4 rounded">
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input type="text" onChange={(event)=> dispatch({type: "INPUT", payLoad: {value: event.target.value}})} className="form-control" id="inputFirstName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="inputLastName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-12">
          <label htmlFor="inputState" className="form-label">
            Course
          </label>
          <select id="inputState" className="form-select">
            <option disabled>Choose...</option>
            <option>JS</option>
            <option>Nodejs</option>
            <option>Express</option>
            <option>React</option>
            <option>Electron</option>
            <option>NEXT</option>
            <option>NEST</option>
          </select>
        </div>
        <div className="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LargeFormWithReducer;
