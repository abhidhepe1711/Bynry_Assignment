import React, { useState, useEffect } from "react";

const Profile = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(storedEntries);
  }, []);

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  return (
    <div className="row">
      {entries.map((entry, index) => (
        <div key={index} className="col-md-3">
          <div className="card m-5" style={{ maxWidth: "18rem" }}>
            <div className="d-flex justify-content-center">
              <img
                src="./user.png" //  profile picture
                className="card-img-top img-fluid rounded-circle shadow"
                alt="Profile"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{`${entry.firstname} ${entry.lastname}`}</h5>
              <p className="card-text">{entry.inputabout}</p>
              <p className="card-text">City: {entry.inputCity}</p>
              <p className="card-text">State: {entry.inputState}</p>
              <p className="card-text">Zip: {entry.inputZip}</p>

              <button className="btn btn-primary">see on map</button>

              <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger mx-4"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
