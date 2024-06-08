import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert, FloatingLabel, Row, Col } from "react-bootstrap";
import "./Register.css";

import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";


const Register = () =>{
    const [inputFirstName, setInputFirstName]   = useState("");
    const [inputLastName, setInputLastName]     = useState("");
    const [inputEmail, setInputEmail]           = useState("");
    const [inputAddress, setInputAddress]       = useState("");
    const [inputUsername, setInputUsername]     = useState("");
    const [inputPassword, setInputPassword]     = useState("");

    const [show, setShow]       = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        console.log(`Username :${inputUsername}, Password :${inputPassword}`);
        if (inputUsername !== "admin" || inputPassword !== "admin") {
        setShow(true);
        }
        setLoading(false);
    };

    const handlePassword = () => {};

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }


    return(
        <div
        className="sign-in__wrapper"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
        {/* Overlay */}
        <div className="sign-in__backdrop"></div>
        {/* Form */}
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          
            <div className="h4 mb-2 text-center">Register</div>
            {/* ALert */}
            {show ? (
            <Alert
                className="mb-2"
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                Incorrect username or password.
            </Alert>
            ) : (
            <div />
            )}
             <Row className="align-items-center">
                <Col sm={6} className="my-1">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputFirstName}
                        placeholder="First Name"
                        onChange={(e) => setInputFirstName(e.target.value)}
                        required
                    />
                </Col>
                <Col sm={6} className="">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputLastName}
                        placeholder="Last Name"
                        onChange={(e) => setInputLastName(e.target.value)}
                        required
                    />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col sm={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputEmail}
                        placeholder="Email"
                        onChange={(e) => setInputEmail(e.target.value)}
                        required
                    />
                </Col>
                <Col sm={6} className="align-items-center">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={inputUsername}
                    placeholder="Username"
                    onChange={(e) => setInputUsername(e.target.value)}
                    required
                />
                </Col >
            </Row>
            <Row>
                <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        required
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                <Form.Label>Address</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="address">
                    <Form.Control
                    as="textarea"
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                </Col>
            </Row>
             
            {!loading ? (
            <Button className="w-100" variant="primary" type="submit">
                Register
            </Button>
            ) : (
            <Button className="w-100" variant="primary" type="submit" disabled>
                Register...
            </Button>
            )}
            <div className="d-grid justify-content-end">
            <Button
                className="text-muted px-0"
                variant="link"
                onClick={handlePassword}
            >
                <Link to="/login-user">login</Link>
            </Button>
           
            </div>
        </Form>
        {/* Footer */}
        <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
            &copy;2024
        </div>
        </div>
    )
}

export default Register;


