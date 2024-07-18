import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000";  //sem espaço antes do 5000

export function signup(data) {  //recebe dados
    delete data.confirmPassword;  //exclui esses
    const response = axios.post(`${BASE_URL}/signup`, data);  //manda pro back 
    return response;
}
export function signin(data) {  //recebe dados
    const response = axios.post(`${BASE_URL}/signin`, data);   
    return response;
}
export function userLogged() {
    const response = axios.get(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    });  //header do back
    return response;
}