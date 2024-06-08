// import { call, delay, put, takeEvery } from "redux-saga/effects";
import { call, delay, put, takeEvery } from "redux-saga/effects";

import axios from "axios";
import { redirect } from "react-router-dom";

const baseUrl   = "http://127.0.0.1:8282/api/user"

function* login(actions){
    const {payload} = actions

    try {
        const res = yield axios.post(`${baseUrl}/login`, payload,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data.user);

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("id_user", res.data.user.id_user);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("username", res.data.user.username);
        
        if(res.data.user.role == '1'){
            localStorage.setItem("is_admin", true);
        }else{
            localStorage.setItem("is_admin", false);
        }
        localStorage.setItem("is_login", true);
        // if(res.data.users)
        // localStorage.setItem("isAdmin", res.data.isAdmin);

        yield put({type : "LOGIN_SUCCESS"});
    } catch (e) {

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        const errors = e.response.data.messages
        
        yield put({type: "LOGIN_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "LOGIN_REMOVE_ERRORS"})
    }
}

function* logout(actions)
{
    const {payload} = actions
  
    localStorage.clear();
    sessionStorage.clear();
    yield put({type: "LOGOUT_SUCCESS", payload: payload})
}

export function* requestLogin(action){
    yield takeEvery("LOGIN_REQUEST", login);
}

export function* requestLogout(action)
{
    yield takeEvery("LOGOUT_REQUEST", logout);
}