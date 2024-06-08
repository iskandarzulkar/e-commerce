import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Product from "../views/product/Product";
import Login from "../views/login-user/Login";
import Register from "../views/register-user/Register";
import PrivateRoute from "./PrivateRoute";


const IndexRoute = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact  element={<PrivateRoute><Product /></PrivateRoute>} />
                <Route path="/login-user" exact  element={<Login />} />
                <Route path="/register-user" exact  element={<Register />} />
            
            </Routes>
        </Router>
    )
}


export default IndexRoute;