import React, { useContext } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import logo from "./logo.svg";
import "./Navbar.css";

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        className="justify-content-between"
        // style={{ marginBottom: 20 }}
      >
        {/* <Link to="/" style={{ marginLeft: 20 }}> */}
        <img
          src={logo}
          width="100"
          height="max"
          className="d-inline-block align-top bg-light rounded"
          alt="logo"
        />
        {/* <Link> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "white",
            marginRight: 20,
          }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ flexGrow: 0, marginRight: 20 }}
        >
          <Nav className="me-auto">
            <Link to="/" className="p-2" style={{ color: "white" }}>
              Home
            </Link>
            <Link to="/browse" className="p-2" style={{ color: "white" }}>
              Browse
            </Link>
            <Link to="/discuss" className="p-2" style={{ color: "white" }}>
              Discuss
            </Link>
            {!user && (
              <Link to="/login" className="p-2" style={{ color: "white" }}>
                Login
              </Link>
            )}
            {user && (
              <button v onClick={logout}>
                Log Out
              </button>
            )}

            {/* <NavDropdown
                title="User"
                id="basic-nav-dropdown"
                style={{ backgroundColor: "red", color: "white" }}
              >
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default Navigation;
