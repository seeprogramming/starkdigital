import React, { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { getFormDetails } from "../store/actions";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const OrderForm = () => {
  const [redirect, setRedirect] = useState(false);

  const initialInputState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const { firstName, lastName, address, city, state, country } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    dispatch(getFormDetails(eachEntry));

    setRedirect(true);
  };


  if(redirect){
    return <Redirect to="/cart"/>
  }

  return (
    <Layout>
      <Hero title="ORDER FORM" />
      <form>
        <div className="form-row">
          <div class="form-group col-md-6">
            <label>First Name</label>
            <input
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Last Name</label>
            <input
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <label>Address</label>
          <input
            name="address"
            value={address}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row">
          <div class="form-group col-md-4">
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-4">
            <label>State</label>
            <input
              name="state"
              value={state}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-4">
            <label>Country</label>
            <input
              name="country"
              value={country}
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <button
            onClick={handleFinalSubmit}
            type="submit"
            className="btn btn-primary"
            value="SUBMIT"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default OrderForm;
