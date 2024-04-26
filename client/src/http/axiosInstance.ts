import axios from "axios";

export const API_URL = "http://localhost:3001/api";

export const $axios = axios.create({
  withCredentials: false,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
