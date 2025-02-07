import axios from "axios";

const BASE_URL="http://localhost:3001/api";


export const registerReq = user => axios.post(`${BASE_URL}/users`, user);