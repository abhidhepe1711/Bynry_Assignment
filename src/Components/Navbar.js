import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-secondary justify-content-between">
      <a className="navbar-brand fs-1">Profiles</a>
      <form className="form-inline d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 mx-3 text-white"
          type="submit"
          style={{ height: "40px", width: "110px" }}
        >
          Search
        </button>
        <div className="d-flex">
          <Link
            className="btn bg-white text-success mx-1"
            style={{ height: "40px", width: "110px" }}
            to="/login"
          >
            Admin
          </Link>
          <Link
            className="btn bg-white text-success mx-1"
            style={{ height: "40px", width: "100px" }}
            to="/add"
          >
            Add Entry
          </Link>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
