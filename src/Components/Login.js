import React, { useState, useContext } from "react";
import globalContext from "../Context/GlobalContext";
import Button from "@mui/material/Button";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "./google";
import SeperatingLine from "./SeperatingLine";

function Login() {
  const context = useContext(globalContext);
  const { login } = context;

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLoginClicked = (e) => {
    e.preventDefault();
    login(credentials);
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
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
      <form onSubmit={handleLoginClicked}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            required
            name="email"
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
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
            onChange={onChange}
            required
            autoComplete="on"
            name="password"
            minLength={6}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginBottom: "20px", marginTop: "15px" }}
        >
          Login
        </Button>

        <SeperatingLine text="Or"/>

        <GoogleOAuthProvider clientId="34822599945-sm8fknc645c0sksreddm5n16a1f9nd1j.apps.googleusercontent.com">
          <Google text="signin_with" />
        </GoogleOAuthProvider>
      </form>
    </div>
  );
}

export default Login;
