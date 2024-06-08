
export const getUser      = () =>{
    return {
        type: "REQUEST_DATA_USER",
    }
}

export const loginRequest = (data) =>{
    return{
        type:"LOGIN_REQUEST",
        payload:data
    }
}

export const logoutRequest = () =>{
    return{
        type: "LOGOUT_REQUEST"
    }
}