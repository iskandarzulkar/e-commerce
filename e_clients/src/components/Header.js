import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap"
import { logoutRequest } from "../store/actions/loginActions"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username")
  const dispatch  = useDispatch();
  const Navigate  = useNavigate();

  const logout = () =>
  {
    dispatch(logoutRequest());
    Navigate("/login-user");
  }

  return(
    <>
        <Navbar style={navbarColor}>
            <Container>
                <Navbar.Brand>
                  Wellcome : {username}
                </Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">

                  </Nav>
                  <Nav>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                    
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>

  )
}

export default Header

const navbarColor ={
    background        : "#4aba",
    color             : "#fff"
}
