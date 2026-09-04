import axios from "axios";

const api = axios.create({
  baseURL: "https://restaurant-backend-1gee.onrender.com/api",

});

export default api;
