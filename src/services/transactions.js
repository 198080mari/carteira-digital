import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000";  //sem espaço antes do 5000

export function findAllTransaction() {
    const response = axios.get(`${BASE_URL}/transactions`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}`},
});  //transactions do back
return response;
}
export function createNewTransaction(body) {   //segundo parametro post é body
    const response = axios.post(`${BASE_URL}/transactions`, body, {  
        headers: {Authorization: `Bearer ${Cookies.get("token")}`},
    })
    return response;
}
