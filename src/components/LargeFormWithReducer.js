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
    course: "",
    gender: null,
    checked: false,
    quantity: 0,
    message: "",
  };

  const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "INPUT":
        return { ...state, [action.payLoad.name]: action.payLoad.value };
      case "TOGGLE":
        return { ...state, checked: !state.checked };
      case "INCREMENT":
        return { ...state, quantity: state.quantity +1 };
      case "DECREMENT":
        return { ...state, quantity: state.quantity -1 };
      default:
        return state;
    }
  };

  const submit = (event) => {
    event.preventDefault();

    console.log(state);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5">
      <form onSubmit={submit} className="row g-3 bg-success p-4 rounded">
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            className="form-control"
            id="inputFirstName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            className="form-control"
            id="inputLastName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            name="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="inputAddress"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            placeholder="1234 Main St"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            name="city"
            type="text"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputState" className="form-label">
            Course
          </label>
          <select
            id="inputState"
            onChange={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: { value: event.target.value, name: event.target.name },
              })
            }
            name="course"
            className="form-select"
          >
            <option disabled>Choose...</option>
            <option value={"JS"}>JS</option>
            <option value={"Nodejs"}>Nodejs</option>
            <option value={"Express"}>Express</option>
            <option value={"React"}>React</option>
            <option value={"Electron"}>Electron</option>
            <option value={"NEXT"}>NEXT</option>
            <option value={"NEST"}>NEST</option>
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              onChange={(event) =>
                dispatch({
                  type: "INPUT",
                  payLoad: {
                    value: event.target.value,
                    name: event.target.name,
                  },
                })
              }
              className="form-check-input"
              type="radio"
              value="male"
              name="gender"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={(event) =>
                dispatch({
                  type: "INPUT",
                  payLoad: {
                    value: event.target.value,
                    name: event.target.name,
                  },
                })
              }
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
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
              name="checked"
              onClick={(event)=> dispatch({type: "TOGGLE"})}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            name="message"
            onBlur={(event) =>
              dispatch({
                type: "INPUT",
                payLoad: {
                  value: event.target.value,
                  name: event.target.name,
                },
              })
            }
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="text-center">
            <p>{state.quantity}</p>
            <div>
              <button onClick={()=> dispatch({type:"DECREMENT"})} type="button" className="btn btn-primary me-4">
                -
              </button>
              <button onClick={()=> dispatch({type:"INCREMENT"})} type="button" className="btn btn-primary">
                +
              </button>
            </div>
          </div>
        </div>
        {state.checked && (
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default LargeFormWithReducer;
