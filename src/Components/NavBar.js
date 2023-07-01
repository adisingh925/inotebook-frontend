import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import globalContext from "../Context/GlobalContext";
import Button from "@mui/material/Button";

function NavBar(props) {
  const context = useContext(globalContext);
  const { onLogoutClick } = context;
  let location = useLocation();

  return (
    <>
      <nav className="navbar border-bottom navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.heading}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    localStorage.getItem("token")
                      ? location.pathname === "/"
                        ? "active"
                        : ""
                      : "disabled"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "10px" }}
                >
                  Login
                </Button>

                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  color="primary"
                >
                  Signup
                </Button>
              </form>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={onLogoutClick}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
