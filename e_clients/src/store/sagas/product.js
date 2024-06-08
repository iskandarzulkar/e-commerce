import { call, delay, put, takeEvery } from "redux-saga/effects";

import axios from "axios";

const baseUrl   = "http://127.0.0.1:8282/api/product/";
const token     = localStorage.getItem("token");

function* get(){

    try {
        
        const res = yield axios.get(`${baseUrl}/product`,{
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield call(delay, 3000)
  
        yield put({type: "GET_LIST_PRODUCT_SUCCESS", payload: res.data[0]})

       

    } catch (e) {

        const errors = e.message
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield put({type: "GET_LIST_PRODUCT_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "GET_FAILED_REMOVE_ERRORS"})
    }
}


export function* getListProduct()
{
    yield takeEvery("GET_LIST_PRODUCT", get)
}
