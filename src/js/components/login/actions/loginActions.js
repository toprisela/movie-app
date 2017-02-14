import axios from 'axios';
import { setAuthorizationToken } from '../../../utils/authorizationToken'; 
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../../../enums/actionTypes';

export function login(data){
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    };
}

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}