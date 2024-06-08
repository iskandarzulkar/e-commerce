import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) =>{

    const token = localStorage.getItem("token");

    // if(token != ""){
    //     const {isAuthenticated} = true;
    // }else{
    //     const {isAuthenticated} = false;
    // }
    // const {isAuthenticated} = useSelector(state => state.login);
  
    if(!token) return <Navigate to ="/login-user" />

    return props.children
    
}

export default PrivateRoute
