import { all} from 'redux-saga/effects';
import {getListProduct} from "./product";
import { requestLogin, requestLogout } from './login';

export default function* rootSaga(){
    
    yield all([
        getListProduct(),
        requestLogin(),
        requestLogout()
    ])
}