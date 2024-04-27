import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    inputabout: "",
    inputCity: "",
    inputState: "",
    inputZip: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [...storedEntries, values];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    setValues({
      firstname: "",
      lastname: "",
      inputabout: "",
      inputCity: "",
      inputState: "",
      inputZip: "",
    });
    // Navigate to the home
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit} className="w-50">
        {" "}
        {/* Decreased width */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="First name"
              value={values.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Last name"
              value={values.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputabout">About</label>
          <input
            type="text"
            className="form-control"
            name="inputabout"
            placeholder="Tell us something about you"
            value={values.inputabout}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              name="inputCity"
              value={values.inputCity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="inputState">State</label>
            <input
              type="text"
              className="form-control"
              name="inputState"
              value={values.inputState}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              name="inputZip"
              value={values.inputZip}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntry;
