import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { getUser } from '../../store/actions/loginActions';

import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/actions/loginActions";

import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";

const Login = () => { 
    
    const token = localStorage.getItem("token");
    const {isAuthenticated, isLoadingLogin, error}      = useSelector(state => state.login);

    const dispatch                  = useDispatch();
    const Navigate                  = useNavigate();

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [show, setShow]       = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        
        if (inputUsername !== " " && inputPassword !== " ") {
            const data = {
                username : inputUsername,
                password : inputPassword
            }

            setShow(false);
            dispatch(loginRequest(data));
        }
        setLoading(false);
    };

    const handlePassword = () => {};

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
 
    if(token){
        Navigate("/");
    }

    useEffect(() => ()=>{
        dispatch(getUser());
    },[dispatch])

    return (
        <div
        className="sign-in__wrapper"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
        {/* Overlay */}
        <div className="sign-in__backdrop"></div>
        {/* Form */}
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
            {/* Header */}
            <img
            className="img-thumbnail mx-auto d-block mb-2"
            src={Logo}
            alt="logo"
            />
            <div className="h4 mb-2 text-center">Sign In</div>
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
            <Form.Group className="mb-2" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                value={inputUsername}
                placeholder="Username"
                onChange={(e) => setInputUsername(e.target.value)}
                required
            />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={inputPassword}
                placeholder="Password"
                onChange={(e) => setInputPassword(e.target.value)}
                required
            />
            </Form.Group>
            {/* <Form.Group className="mb-2" controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
            </Form.Group> */}
            {!loading ? (
            <Button className="w-100" variant="primary" type="submit">
                Log In
            </Button>
            ) : (
            <Button className="w-100" variant="primary" type="submit" disabled>
                Logging In...
            </Button>
            )}
            <div className="d-grid justify-content-end">
            <Button
                className="text-muted px-0"
                variant="link"
                onClick={handlePassword}
            >
                <Link to="/register-user">Register</Link>
            </Button>
           
            </div>
        </Form>
        {/* Footer */}
        <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
            &copy;2024
        </div>
        </div>
    );
};

export default Login;
