import axios from "axios";
import {DASHBOARD_API_URL} from "../../config";

const api = axios.create({
    baseURL: DASHBOARD_API_URL,
    timeout: 80000,
});

export default api
