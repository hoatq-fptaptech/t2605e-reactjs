import axios from "axios";
import ENV from "../constants/ENV";

const apiClient = axios.create({
  baseURL: ENV.api_url,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'foobar'
  }
});
export default apiClient;