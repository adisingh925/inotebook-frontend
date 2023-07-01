import React, { useState, useContext } from "react";
import globalContext from "../Context/GlobalContext";
import Button from "@mui/material/Button";

function Signup() {
  const context = useContext(globalContext);
  const { signup } = context;

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(credentials);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            onChange={handleOnChange}
            name="name"
            minLength={3}
            required
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleOnChange}
            name="email"
            required
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={handleOnChange}
            name="password"
            required
            autoComplete="on"
            minLength={6}
            className="form-control"
            id="password"
          />
        </div>

        <Button type="submit" variant="contained">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
