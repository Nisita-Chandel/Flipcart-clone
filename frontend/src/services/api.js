import axios from "axios";

/* BASE API INSTANCE */
const API = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // allows cookies (JWT token)
});

/* AUTH APIs */

/* REGISTER */
export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

/* LOGIN */
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

/* LOGOUT */
export const logoutUser = () => {
  return API.post("/auth/logout");
};

export default API;